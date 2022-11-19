import React, { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export const Select = ({ selected, setSelected, changeLanguage }) => {
  const options = ["english", "serbian"];
  const [isActive, setIsActive] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsActive(false);
  };

  useEffect(() => {
    changeLanguage(selected);
  }, [selected, changeLanguage]);

  return (
    <div className="select">
      <div className="select-btn" onClick={() => setIsActive(!isActive)}>
        {selected}
        <span>
          <FaCaretDown />
        </span>
      </div>
      {isActive && (
        <div className="select-content">
          {options.map((option, index) => (
            <div
              className="select-option"
              onClick={() => handleSelect(option)}
              key={index}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
