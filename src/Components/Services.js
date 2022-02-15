import { useState } from "react";
import Button from "./Button";
import imageModelovanje from "../images/modelovanje.jpg";
import imageProjektovanje from "../images/projektovanje.jpg";
import imageIzvodjenje from "../images/izvodjenje.jpg";
import { translations } from "../translations";

const Services = ({ language }) => {
  // toggle read more state
  const [readMore, setReadMore] = useState(true);

  // destructuring chapters content from translations object

  const { first, second, third, fourth } = translations.services.chapters;
  const { title } = translations.services;
  const { buttonTitle } = translations.services;

  // chapters & btn state

  const [firstChapter, setFirstChapter] = useState(
    first[language].substring(0, 435) + " (...)"
  );
  const [secondChapter, setSecondChapter] = useState(
    second[language].substring(0, 260) + " (...)"
  );
  const [thirdChapter, setThirdChapter] = useState(
    third[language].substring(0, 363) + " (...)"
  );
  const [fourthChapter, setFourthChapter] = useState(
    fourth[language].substring(0, 137) + " (...)"
  );
  const [firstBtnTitle, setFirstBtnTitle] = useState(
    buttonTitle.more[language]
  );
  const [secondBtnTitle, setSecondBtnTitle] = useState(
    buttonTitle.more[language]
  );
  const [thirdBtnTitle, setThirdBtnTitle] = useState(
    buttonTitle.more[language]
  );
  const [fourthBtnTitle, setFourthBtnTitle] = useState(
    buttonTitle.more[language]
  );

  // functions to toggle chapters content onclick

  const handleFirstChapter = () => {
    setFirstChapter(
      readMore ? first[language] : first[language].substring(0, 435) + "(...)"
    );
    setFirstBtnTitle(
      readMore ? buttonTitle.less[language] : buttonTitle.more[language]
    );
    setReadMore(!readMore);
  };
  const handleSecondChapter = () => {
    setSecondChapter(
      readMore
        ? second[language]
        : second[language].substring(0, 260) + " (...)"
    );
    setSecondBtnTitle(
      readMore ? buttonTitle.less[language] : buttonTitle.more[language]
    );
    setReadMore(!readMore);
  };
  const handleThirdChapter = () => {
    setThirdChapter(
      readMore ? third[language] : third[language].substring(0, 363) + " (...)"
    );
    setThirdBtnTitle(
      readMore ? buttonTitle.less[language] : buttonTitle.more[language]
    );
    setReadMore(!readMore);
  };
  const handleFourthChapter = () => {
    setFourthChapter(
      readMore
        ? fourth[language]
        : fourth[language].substring(0, 137) + " (...)"
    );
    setFourthBtnTitle(
      readMore ? buttonTitle.less[language] : buttonTitle.more[language]
    );
    setReadMore(!readMore);
  };

  return (
    <div className="services">
      {/* first chapter */}

      <div className="box">
        <div className="text-box">
          <h2>{title.first[language]}</h2>
          <p>{firstChapter}</p>
          <Button
            handleClick={handleFirstChapter}
            //toggle the button text & style
            // title={readMore ? buttonTitle.more[language] : buttonTitle.less[language]}
            title={firstBtnTitle}
            // color={readMore ? 'rgb(228, 198, 198)' : 'rgb(85, 12, 12)'}
          />
        </div>
        <div className="img-box">
          <img src={imageModelovanje} alt="3D" />
        </div>
      </div>

      {/*  second Chapter */}

      <div className="box">
        <div className="img-box">
          <img src={imageProjektovanje} alt="3D" />
        </div>
        <div className="text-box">
          <h2>{title.second[language]}</h2>
          <p>{secondChapter}</p>
          <Button
            handleClick={handleSecondChapter}
            //toggle the button text & style
            // title={readMore ? buttonTitle.more[language] : buttonTitle.less[language]}
            title={secondBtnTitle}
            // color={readMore ? 'rgb(228, 198, 198)' : 'rgb(85, 12, 12)'}
          />
        </div>
      </div>

      {/* third chapter */}

      <div className="box">
        <div className="text-box">
          <h2>{title.third[language]}</h2>
          <p>{thirdChapter}</p>
          <Button
            handleClick={handleThirdChapter}
            //toggle the button text & style
            // title={readMore ? buttonTitle.more[language] : buttonTitle.less[language]}
            title={thirdBtnTitle}
            // color={readMore ? 'rgb(228, 198, 198)' : 'rgb(85, 12, 12)'}
          />
        </div>
        <div className="img-box">
          <img src={imageIzvodjenje} alt="3D" />
        </div>
      </div>
      <div className="box">
        <div className="img-box">
          <img src={imageIzvodjenje} alt="3D" />
        </div>
        <div className="text-box">
          <h2>{title.fourth[language]}</h2>
          <p>{fourthChapter}</p>
          <Button
            handleClick={handleFourthChapter}
            //toggle the button text & style
            // title={readMore ? buttonTitle.more[language] : buttonTitle.less[language]}
            title={fourthBtnTitle}
            // color={readMore ? 'rgb(228, 198, 198)' : 'rgb(85, 12, 12)'}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
