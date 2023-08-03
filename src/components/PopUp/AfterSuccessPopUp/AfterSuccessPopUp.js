import React from "react";
import "./AfterSuccessPopUp.scss";
import CorrectIcon from "../../../Images/CorrectIcon.svg";

const AfterSuccessPopUp = ({ onClose ,register, login}) => {
  const handleOKClick = () => {
    onClose();

    // Navigate back to the signup page
    // window.location.href = "/signup"; // Replace "/signup" with your signup page URL
  };

  return (
    <div className="after_register_popup">
      <div className="popup">
        <div className="popup-content">
          <img src={CorrectIcon} alt="image" />
          {register && <h1>
            Thank You for <span style={{ color: "#FD5901" }}>Registering!</span>
          </h1>}
          {login && <h1>
            You Are Successfully <span style={{ color: "#FD5901" }}>Logged in!</span>
          </h1>}
         {register &&  <p>We will contact you soon...</p>}
          <button className="ok_button" onClick={handleOKClick}>
            OK
          </button>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterSuccessPopUp;
