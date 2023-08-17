import React, { useEffect, useState } from "react";
import "./feed.scss";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import SmallProfileCard from "../Cards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../Cards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../Cards/Recommendation/RecommendationCard";
import NewsCorner from "../Cards/NewsCorner/NewsCorner";
import FeedPostCard from "../Cards/FeedPost/FeedPostCard";
import CreatePostPopUp from "../../PopUp/CreatePostPopUp/CreatePostPopUp";
import { getAllPostsAPI } from "../../../Service/user";

const Feed = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);
  const openPopup = () => {
    setPopupOpen(!popupOpen);
  };

  useEffect(() => {
    getAllPostsAPI()
      .then(({ data }) => {
        setAllPosts(data);
      })
      .catch(() => setAllPosts([]));
  }, [newPost]);
  return (
    <>
      <div className="container-fluid feed_container">
        <div className="row mt-2">
          <div className="col">
            <SmallProfileCard text={"Home"} />
            <div className="content-70">
              <div className="row">
                <div className="col-12 mt-2">
                  <div className="box start_post_container">
                    <img src={profilePic} alt="Image" />
                    <div className="w-100 me-4" onClick={openPopup}>
                      <input
                        className="px-3"
                        type="text"
                        placeholder="Write a post..."
                        style={{ pointerEvents: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {allPosts.length ? (
                allPosts.map(
                  ({
                    description,
                    user: { firstName, lastName },
                    video,
                    image,
                    createdAt,
                  }) => (
                    <FeedPostCard
                      key={Math.random()}
                      description={description}
                      firstName={firstName}
                      lastName={lastName}
                      video={video}
                      image={image}
                      createdAt={createdAt}
                    />
                  )
                )
              ) : (
                <p className="container p-5 text-center my-5 bg-white rounded-5 shadow ">
                  Loading...
                </p>
              )}
            </div>
            {popupOpen && (
              <CreatePostPopUp
                setPopupOpen={setPopupOpen}
                popupOpen
                setNewPost={setNewPost}
              />
            )}
          </div>
          <div className="col">
            <div className="content-30">
              <div className="row">
                <RightProfileCard />
                <RecommendationCard />
                <NewsCorner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
