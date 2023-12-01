import { useState } from "react";
export default function Picture() {
  const [isPicActive, setIsPicActive] = useState(false);

  let bgClassName = "background";
  let imgClassName = "picture";
  if (isPicActive) {
    imgClassName = imgClassName + " picture--active";
  } else {
    bgClassName += " background--active";
  }
  const handlePictureClick = (e) => {
    e.stopPropagation();
    console.log("pic clicked");
    setIsPicActive(true);
  };

  const handleDivClick = (e) => {
    console.log("div clicked");
    setIsPicActive(false);
  };
  return (
    <div className={bgClassName} onClick={handleDivClick}>
      <img
        className={imgClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e)=>handlePictureClick(e)}
      />
    </div>
  );
}

// background--active
// picture--active
