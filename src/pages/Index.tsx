import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            STARK-LUXE
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Elevate Your Style with Timeless Elegance
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/products")}
            className="bg-white text-black hover:bg-gray-100"
          >
            Shop Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Premium Quality</h3>
            <p className="text-muted-foreground">
              Crafted with the finest materials for lasting luxury
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Timeless Design</h3>
            <p className="text-muted-foreground">
              Classic pieces that transcend seasonal trends
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Expert Craftsmanship</h3>
            <p className="text-muted-foreground">
              Meticulously designed by fashion artisans
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
