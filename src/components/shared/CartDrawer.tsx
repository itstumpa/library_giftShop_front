import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';
// import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  const totalPrice = getTotalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card shadow-elevated z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-accent" />
                <h2 className="font-display text-xl font-semibold">Your Cart</h2>
                <span className="text-sm text-muted-foreground">
                  ({items.length} items)
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={closeCart}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-muted-foreground text-center mb-4">
                  Your cart is empty
                </p>
                <Button onClick={closeCart} asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <>
                <ScrollArea className="flex-1">
                  <div className="p-6 space-y-4">
                    {items.map((item) => (
                      <div key={item.productId} className="flex gap-4">
                        <div className="w-20 h-24 rounded-md overflow-hidden bg-secondary flex-shrink-0">
                          <Image
                            src={item.product.image}
                            width={400}
  height={400}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm line-clamp-2 mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-accent font-semibold">
                            ${item.product.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.productId, item.quantity - 1)
                              }
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.productId, item.quantity + 1)
                              }
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive ml-auto"
                              onClick={() => removeItem(item.productId)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Footer */}
                <div className="border-t p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-lg">
                    <span className="font-display font-semibold">Total</span>
                    <span className="font-display font-bold text-accent">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={closeCart}
                    asChild
                  >
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
