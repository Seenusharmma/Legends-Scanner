import MenuHeader from "@/components/MenuHeader";
import MenuTabs from "@/components/MenuTabs";
import Footer from "@/components/Footer";
import { beverageMenu, foodMenu } from "@/data/menu";

/**
 * Legends Microbrewery — QR-accessible digital menu.
 * Serves the full menu at /menu as requested.
 */
export default function MenuPage() {
  return (
    <main id="main-content">
      <MenuHeader />
      <MenuTabs food={foodMenu} beverages={beverageMenu} />
      <Footer />
    </main>
  );
}
