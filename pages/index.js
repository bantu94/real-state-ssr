import HeroBanner from "@/features/Home/components/HeroForm/HeroBanner";
import FeaturedProperties from "@/features/Home/components/featuredProperties/featuredProperties";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";

export default function Home({featuredProperties}) {
  return (
    <DefaultLayout> 
      <HeroBanner/>
      <FeaturedProperties featuredProperties={featuredProperties}/>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const { hits } = require('@/features/data/properties')
  return {
    props: { featuredProperties: hits }
  }
}
