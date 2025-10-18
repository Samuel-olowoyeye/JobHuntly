import Category from "@/components/Category";
import Companies from "@/components/Companies";
import FeaturedJobs from "@/components/FeaturedJobs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LastestJobs from "@/components/LastestJobs";


export default function HomePage() {
  return (
    <div>
        <Header />
        <Hero />
        <Companies />
        <Category />
        <FeaturedJobs />
        <LastestJobs />
        <Footer />
    </div>
  );
}
