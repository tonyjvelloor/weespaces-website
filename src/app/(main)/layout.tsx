import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import LeadCapture from "@/components/LeadCapture";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
        <LeadCapture />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
