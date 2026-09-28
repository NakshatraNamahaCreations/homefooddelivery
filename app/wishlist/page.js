import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import WishlistView from "./WishlistView";

export const metadata = {
  title: "Your Wishlist — HomePlate",
  description: "The homemade goodies you've saved for later.",
};

export default function WishlistPage() {
  return (
    <>
      <Navbar />
      <PageHero title="Your Wishlist" sub="The homemade goodies you've saved for later." />
      <main className="pg-page">
        <WishlistView />
      </main>
      <Footer />
    </>
  );
}
