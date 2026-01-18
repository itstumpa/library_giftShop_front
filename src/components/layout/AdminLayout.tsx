// import { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import {
//   LayoutDashboard,
//   Package,
//   FolderOpen,
//   ShoppingCart,
//   ChevronLeft,
//   ChevronRight,
//   LogOut,
//   BookOpen,
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// const sidebarLinks = [
//   { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
//   { href: '/admin/products', label: 'Products', icon: Package },
//   { href: '/admin/categories', label: 'Categories', icon: FolderOpen },
//   { href: '/admin/orders', label: 'Orders', icon: ShoppingCart },
// ];

// interface AdminLayoutProps {
//   children: React.ReactNode;
// }

// export function AdminLayout({ children }: AdminLayoutProps) {
//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();

//   return (
//     <div className="min-h-screen flex bg-secondary/30">
//       {/* Sidebar */}
//       <aside
//         className={cn(
//           'fixed left-0 top-0 h-full bg-sidebar text-sidebar-foreground flex flex-col transition-all duration-300 z-40',
//           collapsed ? 'w-16' : 'w-64'
//         )}
//       >
//         {/* Logo */}
//         <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
//           <NavLink href="/" className="flex items-center gap-2">
//             <BookOpen className="h-7 w-7 text-sidebar-primary" />
//             {!collapsed && (
//               <span className="font-display text-xl font-bold">Library</span>
//             )}
//           </NavLink>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setCollapsed(!collapsed)}
//             className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
//           >
//             {collapsed ? (
//               <ChevronRight className="h-4 w-4" />
//             ) : (
//               <ChevronLeft className="h-4 w-4" />
//             )}
//           </Button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 py-4 px-2 space-y-1">
//           {sidebarLinks.map((link) => {
//             const isActive = link.end
//               ? location.pathname === link.href
//               : location.pathname.startsWith(link.href);

//             return (
//               <NavLink
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
//                   isActive
//                     ? 'bg-sidebar-accent text-sidebar-accent-foreground'
//                     : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
//                 )}
//               >
//                 <link.icon className="h-5 w-5 flex-shrink-0" />
//                 {!collapsed && <span className="text-sm font-medium">{link.label}</span>}
//               </NavLink>
//             );
//           })}
//         </nav>

//         {/* Bottom */}
//         <div className="p-4 border-t border-sidebar-border">
//           <NavLink
//             href="/"
//             className={cn(
//               'flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors'
//             )}
//           >
//             <LogOut className="h-5 w-5" />
//             {!collapsed && <span className="text-sm">Back to Store</span>}
//           </NavLink>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main
//         className={cn(
//           'flex-1 transition-all duration-300',
//           collapsed ? 'ml-16' : 'ml-64'
//         )}
//       >
//         {/* Top Bar */}
//         <header className="h-16 bg-background border-b flex items-center justify-between px-6 sticky top-0 z-30">
//           <div>
//             <h1 className="font-display text-xl font-semibold">Admin Dashboard</h1>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-muted-foreground">Welcome, Admin</span>
//             <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-medium">
//               A
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <div className="p-6">{children}</div>
//       </main>
//     </div>
//   );
// }
