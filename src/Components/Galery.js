import imageModelovanje from '../images/modelovanje.jpg';
import imageProjektovanje from '../images/projektovanje.jpg';
import imageIzvodjenje from '../images/izvodjenje.jpg';
import ImageGallery from 'react-image-gallery';

const Galery = ({ items, showPlayButton, showIndex, thumbnailPosition }) => {

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
        <div className="galery">
            <h2>Our projects</h2>
            <div><ImageGallery items={images} showPlayButton={false} showIndex={true} thumbnailPosition={'left'} /></div>
        </div>
    );
}

export default Galery;