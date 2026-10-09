import MenuHeader from "@/components/MenuHeader";
import MenuTabs from "@/components/MenuTabs";
import Footer from "@/components/Footer";
import MenuImageViewer from "@/components/MenuImageViewer";
import WelcomeModal from "@/components/WelcomeModal";
import { beverageMenu, foodMenu } from "@/data/menu";
import { getMenuImages } from "@/lib/menu-images";

/**
 * Legends Microbrewery — QR-accessible digital menu.
 * Serves the full menu at /menu as requested.
 */
export default function MenuPage() {
  const menuImages = getMenuImages();

  return (
    <main id="main-content">
      <WelcomeModal />
      <MenuHeader />
      <MenuTabs food={foodMenu} beverages={beverageMenu} />
      <MenuImageViewer food={menuImages.food} beverage={menuImages.beverage} />
      <Footer />
    </main>
  );
}
