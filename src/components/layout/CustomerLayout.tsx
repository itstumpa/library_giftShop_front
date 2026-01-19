import { CartDrawer } from "@/app/(customer)/shared/CartDrawer";

interface CustomerLayoutProps {
  children: React.ReactNode;
}

export function CustomerLayout({ children }: CustomerLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <CartDrawer />
    </div>
  );
}
