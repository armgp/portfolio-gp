import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 py-6 sm:px-24 sm:py-12">
        <HeroSection />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
