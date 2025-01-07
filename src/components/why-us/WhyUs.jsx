import algheroForadada from '../../assets/image/home/why-us-isola.webp';
import couple from '../../assets/image/home/why-us-couple.webp';
import '../../style/why-us/why-us.css';

const WhyUs = () => {
  return (
    <section className="why-wrapper">
      <section className="why-container">
        <section className="why-container-text">
          <h3 className="heading">
            Why Choose Us
          </h3>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis corporis ipsum et quia enim sit adipisci corrupti. Quos nulla quis, fugit eum officia a itaque. Obcaecati deserunt debitis vel.
          </p>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati expedita accusantium saepe laborum! Dolorum reprehenderit iste assumenda ut officia omnis corrupti, consectetur rem accusantium eius non adipisci temporibus eveniet!
          </p>
          <button className="ctaBtn">Find more</button>
        </section>
        <section className="why-container-image">
          <img className="img-top" src={algheroForadada} alt="Foradada island in alghero" />
          <img className="img-bottom" src={couple} alt="Couple at the sunset from the wall that protected the city of Alghero" />
        </section>
      </section>
    </section>
  )
}

export default WhyUs
