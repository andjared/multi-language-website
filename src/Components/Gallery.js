import ImageGallery from "react-image-gallery";
import { translations } from "../translations";
import { FaAngleDoubleDown } from "react-icons/fa";
import gradation from "../assets/images/gradation.jpg";
import { useRef } from "react";
import { useLanguage } from "./LanguageContext";

const Gallery = ({ items }) => {
  const language = useLanguage();

  const conceptRef = useRef(null);
  const handleScrollButton = () => {
    conceptRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="gallery-page">
      <div className="galleries">
        <div className="gallery">
          <h2>{translations.gallery.first[language]} </h2>
          <ImageGallery
            items={items.firstGalleryimg}
            showIndex
            disableKeyDown
          />
        </div>
        <div className="gallery">
          <h2>{translations.gallery.second[language]} </h2>
          <ImageGallery
            items={items.secondGalleryimg}
            showIndex
            disableKeyDown
          />
        </div>
        <div className="gallery">
          <h2>{translations.gallery.third[language]} </h2>
          <ImageGallery
            items={items.thirdGalleryimg}
            showIndex
            disableKeyDown
          />
        </div>
      </div>
      <div className="concept">
        <button onClick={handleScrollButton}>
          <FaAngleDoubleDown id="downArrow" />
        </button>
        <p>{translations.concept[language]} </p>
        <img id="gradation" src={gradation} alt="" ref={conceptRef} />
      </div>
    </div>
  );
};

export default Gallery;
