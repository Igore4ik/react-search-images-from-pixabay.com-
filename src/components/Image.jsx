import '../styles/App.css';

function Image({src,toggleSizeImg}) {
    return (
        <img src={src} alt="" onClick={toggleSizeImg} />
    );
}

export default Image;
