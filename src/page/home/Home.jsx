import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import WhyUs from "../../components/why-us/WhyUs"
import Icons from "../../components/icons/Icons"
import City from "../../components/city/City"
import Panorama from "../../components/panorama/Panorama"
import Nature from "../../components/nature/Nature"
import Contact from "../../components/contact-form/Contact"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <WhyUs />
      <Icons /> 
      <City />
      <Panorama />
      <Nature />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
