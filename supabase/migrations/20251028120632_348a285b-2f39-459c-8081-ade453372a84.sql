-- Add UPDATE policy for orders table
-- Allow users to update their own orders ONLY when status is 'pending'
-- This prevents fraud while allowing legitimate pre-shipment updates
CREATE POLICY "Users can update their pending orders"
ON public.orders
FOR UPDATE
USING (auth.uid() = user_id AND status = 'pending')
WITH CHECK (auth.uid() = user_id AND status = 'pending');