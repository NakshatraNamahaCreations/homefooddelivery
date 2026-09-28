import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import MenuBrowser from "./MenuBrowser";

export const metadata = {
  title: "Our Menu — HomePlate",
  description: "Browse the full HomePlate pantry: honey, spices, cold-pressed oils, ghee, pickles, jaggery, fruits and veggies.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Our Menu"
        sub="Every jar is small-batch, homemade and free from preservatives. Find your favourites."
      />
      <main className="pg-page">
        <MenuBrowser />
      </main>
      <Footer />
    </>
  );
}
