import React from "react";
import "./newscorner.scss";

const NewsCorner = () => {
  return (
    <>
      <div className="newscorner_container">
        <div className="col-12 newscorner_card">
          <div className="card mt-2 right_view_profile_card right_view_profile">
            <div className="card-header">
              <div className="title">
                <span>News Corner</span>
              </div>
            </div>
            <div className="card-body newscorner_card_body ">
              <div className="newscorner_card_text">
                <h4 className="smallest_typo">
                  Cellbell startup has raised to $10 million dollor funding
                </h4>
                <button>
                  <span>Show more</span>
                </button>
              </div>
            </div>
            <hr className="hr" />
            <div className="card-body newscorner_card_body ">
              <div className="newscorner_card_text">
                <h4 className="smallest_typo">
                  Cellbell startup has raised to $10 million dollor funding
                </h4>
                <button>
                  <span>Show more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCorner;
