import React, { useEffect, useState } from "react";
import "./HalfbendCard.scss";
import ThreeDot from "../../../../../Images/VerticalBlackThreeDots.svg";
// import folderIcon from "../../../../../Images/Folder.png";
import pdfIcon from "../../../../../Images/PDFIcon.png";
import { getPdfData } from "../../../../../Service/user";

const HalfbendCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPdfData().then((res) => {
      setData(res.files);
      console.log("data", res);
    });
  }, []);

  const openPdfInNewWindow = (pdfData) => {
    // Convert the binary data to a Blob
    const pdfBlob = new Blob([pdfData], { type: "application/pdf" });

    // Create a URL for the Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Open the PDF in a new window
    const newWindow = window.open("", "_blank");
    newWindow.document.write(
      '<iframe width="100%" height="100%" src="' + pdfUrl + '"></iframe>'
    );

    // Release the temporary URL after opening the PDF
    URL.revokeObjectURL(pdfUrl);
  };

  return (
    // <div className="half_bend_container">
    //   <div className="box_container mt-4">
    //     <div className="row">
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-4 d-flex justify-content-center align-items-center main_col">
    //         <div className="custom-card">
    //           <div className="top-right-radius">
    //             <img src={ThreeDot} alt="Three dots" />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">Card 1</h5>
    //             <p className="card-text">
    //               This is the content of card consectetur adipiscing elit.
    //             </p>
    //           </div>
    //           <div className="bottom-black-bar">
    //             <p>Financials</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="half_bend_container">
      <div className="box_container mt-4">
        <div className="row">
          {data.map((item) => (
            <div
              className="col-md-4 d-flex justify-content-center align-items-center main_col"
              key={item.name}
              onClick={() => openPdfInNewWindow(item.data)}
            >
              <div className="custom-card">
                <img
                  className="mx-3 my-1"
                  src={pdfIcon}
                  height={50}
                  alt="PDF Icon"
                />
              </div>
              <h6>{item.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HalfbendCard;
