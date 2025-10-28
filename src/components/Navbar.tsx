import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
export const Navbar = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const {
    data: user
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();
      return user;
    }
  });
  const {
    data: cartCount
  } = useQuery({
    queryKey: ["cartCount"],
    queryFn: async () => {
      if (!user) return 0;
      const {
        data
      } = await supabase.from("cart_items").select("quantity").eq("user_id", user.id);
      return data?.reduce((sum, item) => sum + item.quantity, 0) || 0;
    },
    enabled: !!user
  });
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out successfully"
    });
    navigate("/");
  };
  return <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold">STARK-LUXE</Link>
          
          <div className="flex items-center gap-6">
            <Link to="/products" className="hover:text-primary transition-colors">
              Shop
            </Link>
            
            {user ? <>
                <Link to="/orders" className="hover:text-primary transition-colors">
                  Orders
                </Link>
                <Link to="/cart" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {cartCount}
                    </span>}
                </Link>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </> : <Button onClick={() => navigate("/auth")} variant="default">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>}
          </div>
        </div>
      </div>
    </nav>;
};