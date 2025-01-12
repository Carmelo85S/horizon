import image from '../../assets/image/home/nature-img.webp';
import '../../style/nature/nature.css';

const Nature = () => {
  return (
    <section className="nature-wrapper">
        <section className="nature-container">
            <section className="nature-container-title">
                <h2 className="nature-heading">
                    Our Nature
                </h2>
            </section>
            <section className="nature-container-content">
                <section className="nature-image">
                    <img src={image} alt="elicopter view of a beach" />
                </section>
                <section className="nature-container-content-info">
                    <p className="info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum id ducimus, et quidem ab pariatur molestias repellat 
                        itaque sequi enim vitae praesentium! Ullam, omnis. Beatae 
                        iure doloremque temporibus veritatis tempore!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consectetur dignissimos dicta sequi perspiciatis tenetur 
                        mollitia ex, aut consequatur accusamus nostrum aperiam cupiditate 
                        voluptates tempora placeat modi error. Fugiat, cum maiores!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    </p>
                </section>
            </section>
        </section>
    </section>
  )
}

export default Nature
