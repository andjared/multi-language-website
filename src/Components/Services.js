import { useState } from "react";
import Button from "./Button";
import imageModeling from "../assets/images/modeling.jpg";
import imageProjecting from "../assets/images/masterplan.jpg";
import imageBrending from "../assets/images/brending.jpg";
import imagePlanting from "../assets/images/plantingplan.jpg";
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
              ? first[language].substring(0, 437)
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
          <img src={imageModeling} alt="3Dmodeling" />
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          <img src={imageProjecting} alt="landscapeProjecting" />
        </div>
        <div className="text-box">
          <h2>{title.second[language]}</h2>
          <p>
            {readMoreSecond
              ? second[language].substring(0, 261)
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
              ? third[language].substring(0, 362) + "..."
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
          <img src={imageBrending} alt="landscapeBrending" />
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          <img src={imagePlanting} alt="plantingPlan" />
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
