import Banner from "@/components/home/banner/Banner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import HowItWorks from "@/components/home/HowItWorks";
import LatestIdeas from "@/components/home/LatestIdeas";
import TrendingIdeas from "@/components/home/TrendingIdeas";
import WhyChooseIdeaVault from "@/components/home/WhyChooseIdeaVault";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { allIdeasData } from "@/lib/data";



export default async function Home() {


  const ideas = await allIdeasData();

  return (
    <>
      <Navbar />

      <Banner />
      <TrendingIdeas ideas={ideas} />
      <FeaturedCategories />
      <WhyChooseIdeaVault />
      <LatestIdeas ideas={ideas} />
      <HowItWorks />

      <Footer />
    </>
  );
}
