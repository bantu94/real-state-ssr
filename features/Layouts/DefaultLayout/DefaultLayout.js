import Footer from "@/features/data/common/modules/Footer/Footer"
import Navigation from "@/features/data/common/modules/Navigation/Navigation"

const DefaultLayout = ({children}) => {
  return (
    <>
      <Navigation/>
        {children}
      <Footer/>
    </>
  )
}

export default DefaultLayout