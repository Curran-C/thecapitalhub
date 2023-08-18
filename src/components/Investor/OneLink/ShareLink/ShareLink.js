import React from "react";
import "./ShareLink.scss";
import LinkImage from "../../../../Images/LinkImage.svg";
import ExitImage from "../../../../Images/Exit.svg";
import CorrectImage from "../../../../Images/Correct.svg";
import Cross from "../../../../Images/Cross.svg";

const ShareLink = (oneLink) => {
  return (
    <>
      <div className="ShareLink_container">
        <div className="box_container">
          <section className="title_section">
            <h6>Now share all your startup details in one link</h6>
          </section>
          <hr />
          <section className="copy_link_input">
            <div className="input_container left_margin">
              <div className="left_icons">
                <img src={LinkImage} alt="image" />
              </div>
              <input
                type="text"
                placeholder={"Type your text here"}
                value={"/" + oneLink.OneLink}
              />
              <div className="right_icons">
                <img className="right_icons_img1" src={Cross} alt="image" />
                <img
                  className="right_icons_img2"
                  src={CorrectImage}
                  alt="image"
                />
                <img className="right_icons_img3" src={ExitImage} alt="image" />
              </div>
            </div>
          </section>
          {/* <hr />
          <section className="previous_link copy_link_input">
            <h5>Previous Links</h5>
            <div className="input_container">
              <input type="text" placeholder="Type your text here" />
              <div className="right_icons">
                <img className="right_icons_img1" src={ExitImage} alt="image" />
                <img className="right_icons_img2" src={CorrectImage} alt="image" />
              </div>
            </div>
            <div className="input_container">
              <input type="text" placeholder="Type your text here" />
              <div className="right_icons">
                <img className="right_icons_img1" src={ExitImage} alt="image" />
                <img className="right_icons_img2" src={CorrectImage} alt="image" />
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default ShareLink;
