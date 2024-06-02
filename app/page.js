import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/main/Main";
import Features from "@/components/features/Features";
import Advantages from "@/components/Advantages/Advantages";
import Feature2 from "@/components/features/Feature2";
import Testimonial from "@/components/Testimonial/Testimonial";
import Faq from "@/components/FAQ/Faq";
import Ready from "@/components/ready/Ready";
import Copy from "@/components/Footer/copy";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Main/>
      <Features/>
      <Advantages/>
      <Feature2/>
      <Testimonial/>
      <Faq/>
      <Ready/>
      <Footer/>
      <Copy/>
    </main>
  );
}
