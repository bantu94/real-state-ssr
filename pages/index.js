import HeroBanner from "@/features/Home/components/HeroForm/HeroBanner";
import Partners from "@/features/Home/components/Partners/Partners";
import FeaturedProperties from "@/features/Home/components/featuredProperties/FeaturedProperties";
import MeetTheTeam from "@/features/Home/components/meetTheTeam/MeetTheTeam";

import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";

export default function Home({featuredProperties}) {
  return (
    <DefaultLayout> 
      <HeroBanner/>
      <FeaturedProperties featuredProperties={featuredProperties}/>
      <MeetTheTeam />
      <Partners />
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const { hits } = require('@/features/data/properties')
  return {
    props: { featuredProperties: hits.slice(0, 5) }
  }
}
