import imageModelovanje from '../images/modelovanje.jpg';
import imageProjektovanje from '../images/projektovanje.jpg';
import imageIzvodjenje from '../images/izvodjenje.jpg';
import ImageGallery from 'react-image-gallery';

const Gallery = ({ items, showPlayButton, showIndex, showBullets }) => {

    const images = [
        {
            original: imageModelovanje,
            thumbnail: imageModelovanje,
            description: 'Modelovanje'
        },
        {
            original: imageIzvodjenje,
            thumbnail: imageIzvodjenje,
            description: 'Izvodjenje'
        },
        {
            original: imageProjektovanje,
            thumbnail: imageProjektovanje,
            description: 'Projektovanje'
        },
        {
            original: imageModelovanje,
            thumbnail: imageModelovanje,
            description: 'Modelovanje'
        },
        {
            original: imageIzvodjenje,
            thumbnail: imageIzvodjenje,
            description: 'Izvodjenje'
        },
        {
            original: imageProjektovanje,
            thumbnail: imageProjektovanje,
            description: 'Projektovanje'
        }, {
            original: imageModelovanje,
            thumbnail: imageModelovanje,
            description: 'Modelovanje'
        },
        {
            original: imageIzvodjenje,
            thumbnail: imageIzvodjenje,
            description: 'Izvodjenje'
        },
        {
            original: imageProjektovanje,
            thumbnail: imageProjektovanje,
            description: 'Projektovanje'
        }, {
            original: imageModelovanje,
            thumbnail: imageModelovanje,
            description: 'Modelovanje'
        },
        {
            original: imageIzvodjenje,
            thumbnail: imageIzvodjenje,
            description: 'Izvodjenje'
        },
        {
            original: imageProjektovanje,
            thumbnail: imageProjektovanje,
            description: 'Projektovanje'
        }
    ];
    return (
        <div className="gallery">
            <h2>Nasi radovi: </h2>
            <div><ImageGallery items={images} showPlayButton={false} showIndex={true} showBullets /></div>
        </div>
    );
}

export default Gallery;