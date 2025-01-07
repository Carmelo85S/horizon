import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import WhyUs from "../../components/why-us/WhyUs"
import Icons from "../../components/icons/Icons"
import City from "../../components/city/City"

const Home = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <WhyUs />
      <Icons /> 
      <City />
    </div>
  )
}

export default Home
