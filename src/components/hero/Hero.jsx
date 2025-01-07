import '../../style/hero/hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
          <section className="content-container">
            <section className="text">
              <h1 className="heading-title">HORIZON</h1>
              <p className="quote">Safe travel anywhere</p>
            </section>
              <form action="">
                  <input type="text" placeholder="Insert your destination"/>
                  <button type="submit "className="searchBtn">Search</button>
              </form>
          </section>
    </section>
  )
}

export default Hero
