import { useState } from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ imageSrc, link }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <div className="group">
      <div
        onMouseEnter={() => setIsTextVisible(true)}
        onMouseLeave={() => setIsTextVisible(false)}
        className="relative w-full overflow-hidden "
      >
        <img
          className="h-96 w-full object-cover cursor-pointer group-hover:scale-110 transition duration-200"
          src={imageSrc}
          alt="Portfolio image"
        />

        {isTextVisible && (
          <div className="w-full h-full flex items-center justify-center top-0 bg-gray-900/90 absolute">
            <Link to={link} target="_blank" className="border-2 py-2 px-5 text-white hover:border-green-500 rounded-lg text-xl">
              Visit Website
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
