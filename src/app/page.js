import Header from "@/components/Header";
import Body from "@/components/Body";
import About from "@/components/About"
import Footer from "@/components/Footer";
import Store from "@/components/Store";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Header />
      <Body />
      <About />
      <Footer />
      <Store />
    </main>
  );
}
