import { useState } from "react";
import Button from "./Button";
import imageModelovanje from "../assets/images/modelovanje.jpg";
import imageProjektovanje from "../assets/images/projektovanje.jpg";
import imageIzvodjenje from "../assets/images/landscape.jpeg";
import imagePlanting from "../assets/images/plantingplans/9.jpg";
import { translations } from "../translations";

const Services = ({ language }) => {
  const { first, second, third, fourth } = translations.services.chapters;
  const { title } = translations.services;
  const { buttonTitle } = translations.services;

  const [readMoreFirst, setReadMoreFirst] = useState(true);
  const [readMoreSecond, setReadMoreSecond] = useState(true);
  const [readMoreThird, setReadMoreThird] = useState(true);

  const handleReadMore = (readMore, setReadMore) => {
    setReadMore(!readMore);
  };

  return (
    <div className="services">
      <div className="box">
        <div className="text-box">
          <h2>{title.first[language]}</h2>
          <p>
            {readMoreFirst
              ? first[language].substring(0, 435) + " (...)"
              : first[language]}
          </p>
          <Button
            handleClick={() => handleReadMore(readMoreFirst, setReadMoreFirst)}
            title={
              readMoreFirst
                ? buttonTitle.more[language]
                : buttonTitle.less[language]
            }
          />
        </div>
        <div className="img-box">
          <img src={imageModelovanje} alt="3D" />
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          <img src={imageProjektovanje} alt="3D" />
        </div>
        <div className="text-box">
          <h2>{title.second[language]}</h2>
          <p>
            {readMoreSecond
              ? second[language].substring(0, 260) + " (...)"
              : second[language]}
          </p>
          <Button
            handleClick={() =>
              handleReadMore(readMoreSecond, setReadMoreSecond)
            }
            title={
              readMoreSecond
                ? buttonTitle.more[language]
                : buttonTitle.less[language]
            }
          />
        </div>
      </div>
      <div className="box">
        <div className="text-box">
          <h2>{title.third[language]}</h2>
          <p>
            {readMoreThird
              ? third[language].substring(0, 363) + " (...)"
              : third[language]}
          </p>
          <Button
            handleClick={() => handleReadMore(readMoreThird, setReadMoreThird)}
            title={
              readMoreThird
                ? buttonTitle.more[language]
                : buttonTitle.less[language]
            }
          />
        </div>
        <div className="img-box">
          <img src={imageIzvodjenje} alt="3D" />
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          <img src={imagePlanting} alt="3D" />
        </div>
        <div className="text-box">
          <h2>{title.fourth[language]}</h2>
          <p>{fourth[language]}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
