import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { ProductsSection } from "@/components/products-section"
import { PharmacistSection } from "@/components/pharmacist-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloating } from "@/components/whatsapp-floating"

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <PharmacistSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  )
}
