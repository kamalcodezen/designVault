import Banner from "@/components/home/banner/Banner";
import TrendingIdeas from "@/components/home/TrendingIdeas";
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


      <Footer />
    </>
  );
}
