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

  const [readMore, setReadMore] = useState([]);

  const handleReadMore = (id) => {
    setReadMore((prev) => [...prev, id]);
  };

  const handleReadLess = (id) => {
    setReadMore((prev) => prev.filter((item) => item !== id));
  };

  return (
    <section className="page services">
      <div className="box">
        <div className="text-box">
          <h2>{title.first[language]}</h2>
          <p>{first[language].intro}</p>
          <ul>
            {first[language].styles.map((style, index) => (
              <li key={index}>{style}</li>
            ))}
          </ul>
          {readMore.includes(first.id) ? (
            <>
              <p>{first[language].more}</p>
              <Button
                handleClick={() => handleReadLess(first.id)}
                title={buttonTitle.less[language]}
              />
            </>
          ) : (
            <Button
              handleClick={() => handleReadMore(first.id)}
              title={buttonTitle.more[language]}
            />
          )}
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
          <p>{second[language].intro}</p>
          {readMore.includes(second.id) ? (
            <>
              <p>{second[language].more}</p>
              <Button
                handleClick={() => handleReadLess(second.id)}
                title={buttonTitle.less[language]}
              />
            </>
          ) : (
            <Button
              handleClick={() => handleReadMore(second.id)}
              title={buttonTitle.more[language]}
            />
          )}
        </div>
      </div>
      <div className="box">
        <div className="text-box">
          <h2>{title.third[language]}</h2>
          <p>{third[language].intro}</p>
          {readMore.includes(third.id) ? (
            <>
              <p>{third[language].more}</p>
              <Button
                handleClick={() => handleReadLess(third.id)}
                title={buttonTitle.less[language]}
              />
            </>
          ) : (
            <Button
              handleClick={() => handleReadMore(third.id)}
              title={buttonTitle.more[language]}
            />
          )}
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
    </section>
  );
};

export default Services;
