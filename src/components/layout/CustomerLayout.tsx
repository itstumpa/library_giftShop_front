import { CartDrawer } from "@/app/(customer)/shared/CartDrawer";
import { Footer } from "../../app/layout/Footer";
import { Header } from "../../app/layout/Header";

interface CustomerLayoutProps {
  children: React.ReactNode;
}

export function CustomerLayout({ children }: CustomerLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
