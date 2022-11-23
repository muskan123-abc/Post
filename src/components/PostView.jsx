import React from "react";
import { useSelector } from "react-redux";

const PostView = () => {
  const postView = useSelector((state) => state.AuthReducer.postcreate);
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center pt-3">
        <h2 className="mb-0 text-white raleway_font mb-0  font_md">
          All Posts:12
        </h2>
        <button className="submit_btn py-2 px-3">Add New Post</button>
      </div>
      <div className="post_view_bg px-3 py-1 mt-3">
        <div className="d-flex align-items-center justify-content-between cursor-pointer">
          <div>
            <h2 className="mb-0  raleway_font mb-0  font_xsm text-white pb-2">
              Image
            </h2>
            <img
              className="post_view_img"
              src={postView.filePath}
              alt="filePath"
            />
          </div>
          <div>
            <h2 className="mb-0  raleway_font mb-0 text-white  font_xsm pb-2">
              Description
            </h2>
            <h2 className="mb-0  raleway_font mb-0 text-white font_xsm">
              {postView.description}
            </h2>
          </div>
          <div>
            <h2 className="mb-0  raleway_font mb-0 text-white font_xsm pb-2">
              Title
            </h2>
            <h2 className="mb-0  raleway_font mb-0 text-white font_xsm">
              {postView.title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
