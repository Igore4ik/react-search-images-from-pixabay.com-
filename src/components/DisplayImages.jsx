import '../styles/App.css';
import Image from "./Image";

function DisplayImages(props) {
    const toggleSizeImg = () => {

    }
    return (
        <section className="images">
            {props.images &&
            props.images.map(img => {
                return <Image key={img.id} src={img.webformatURL} />
            })
            }
        </section>
    );
}

export default DisplayImages;
