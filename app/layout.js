import "./globals.css";
import Splash from "./components/Splash";
import { ShopProvider } from "./components/ShopStore";
import { CartDrawer, WishlistDrawer, Toast, AuthModal, OrdersDrawer } from "./components/ShopUI";

export const metadata = {
  title: "HomePlate — Homemade Food, Delivered Warm to Your Door",
  description:
    "Premium home-cooked meals from passionate home chefs, delivered fresh to your door. Authentic recipes, real ingredients, unforgettable flavors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Splash />
        <ShopProvider>
          {children}
          <CartDrawer />
          <WishlistDrawer />
          <OrdersDrawer />
          <AuthModal />
          <Toast />
        </ShopProvider>
      </body>
    </html>
  );
}
