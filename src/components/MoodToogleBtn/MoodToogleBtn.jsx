import React, { useState } from "react";
import "./MoodToogleBtn.css";
// import SunModeToogleIcon from "../../assets/SunModeToogleIcon"
// import MoonModeToogleIcon from "../../assets/MoonModeToogleIcon"
// import BallModeToogleIcon from "../../assets/MoonModeToogleIcon"

const MoodToogleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCheckboxChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <svg
          className="fas fa-sun"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.69357 12.5912C10.2297 12.5912 12.2856 10.5353 12.2856 7.99924C12.2856 5.46314 10.2297 3.40723 7.69357 3.40723C5.15748 3.40723 3.10156 5.46314 3.10156 7.99924C3.10156 10.5353 5.15748 12.5912 7.69357 12.5912Z"
            stroke="#B65535"
            strokeWidth="0.801282"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7396 13.0437L12.6478 12.9519M12.6478 3.04726L12.7396 2.95542L12.6478 3.04726ZM2.65134 13.0437L2.74318 12.9519L2.65134 13.0437ZM7.69549 0.991454V0.934937V0.991454ZM7.69549 15.0642V15.0077V15.0642ZM0.687376 7.99957H0.630859H0.687376ZM14.7601 7.99957H14.7036H14.7601ZM2.74318 3.04726L2.65134 2.95542L2.74318 3.04726Z"
            stroke="#B65535"
            strokeWidth="1.06838"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="fas fa-moon"
          width={12}
          height={12}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.01011 6.22556C1.20242 8.97663 3.53682 11.2149 6.33063 11.3377C8.30178 11.4232 10.0646 10.5044 11.1223 9.05676C11.5603 8.46381 11.3253 8.06851 10.5934 8.20206C10.2355 8.26616 9.86695 8.29287 9.48233 8.27685C6.87016 8.17001 4.7334 5.98518 4.72272 3.40505C4.71738 2.71061 4.86161 2.05356 5.12336 1.45527C5.41182 0.792873 5.0646 0.477702 4.39687 0.760822C2.28148 1.65292 0.833832 3.78433 1.01011 6.22556Z"
            stroke="white"
            strokeWidth="0.801282"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="ball"
          width={35}
          height={36}
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="17.6951"
            cy="17.9999"
            rx="12.0273"
            ry="12.0732"
            transform="rotate(-135 17.6951 17.9999)"
            // fill="white"
          />
          <path
            d="M24.7375 10.956C28.6098 14.8283 28.5953 21.121 24.7051 25.0112"
            stroke="#B65535"
            strokeWidth="1.80499"
            strokeLinecap="round"
          />
        </svg>
      </label>
    </div>
  );
};

export default MoodToogleBtn;
