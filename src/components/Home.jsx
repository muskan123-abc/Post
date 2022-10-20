import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { UploadIcon } from "./common/icon/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CreatePostAction } from "./redux/Action";
import Loader from "./common/Loader";
import Dashboard from "./Dashboard";

const Home = () => {
  const [uploadImg, setUploadImg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: "",
    descp: "",
  });
  const dispatch = useDispatch();
  const fileHandler = (e) => {
    const img = URL.createObjectURL(e);
    setUploadImg(img);
  };
  const clickHandler = () => {
    if (postData.descp !== "" && postData.title !== "" && uploadImg !== "") {
      const data = {
        description: postData.descp,
        title: postData.title,
        filePath: uploadImg,
      };
      dispatch(CreatePostAction(data, setLoading, navigate));
      setPostData({
        title: "",
        descp: "",
      });
      setUploadImg("");
    }
  };
  return (
    <>
      <Dashboard />
      <div className="container h-100 justify-content-center d-flex flex-column w-100">
        <h1 className="sign_up_text raleway_font mb-sm-2 mb-0 text-center pt-3">
          Create Post
        </h1>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-9 col-sm-10  my-lg-auto mt-3">
            <div className="mt-2">
              <p className="mb-1  pt-1  cursor-pointer text-white raleway_font  fw-semibold">
                Title
              </p>
              <Form.Control
                type="text"
                className=" py-sm-3 py-2"
                placeholder="Enter Your Title"
                value={postData.title}
                onChange={(e) =>
                  setPostData({
                    ...postData,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <p className="mb-1  pt-1 mt-2  cursor-pointer text-white raleway_font  fw-semibold">
              Description
            </p>
            <Form.Control
              className="pt-3"
              as="textarea"
              value={postData.descp}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  descp: e.target.value,
                })
              }
              placeholder="Enter Your Description"
              rows={4}
            />

            <div className="mt-2">
              <p className="mb-1  pt-1  cursor-pointer text-white raleway_font  fw-semibold">
                Upload Media
              </p>
              <div className="row align-items-center d-flex ">
                <div className="col">
                  {" "}
                  <input
                    onChange={(e) => fileHandler(e.target.files[0])}
                    type="file"
                    hidden
                    id="myfile"
                  />
                  <label htmlFor="myfile" className="w-100">
                    {" "}
                    <div className="upload_file">
                      <div className="h-100 d-flex justify-content-center align-items-center">
                        {uploadImg ? (
                          <img
                            style={{ objectFit: "contain" }}
                            className="w-100 h-100 py-2"
                            src={uploadImg}
                            alt="image"
                          />
                        ) : (
                          <div className="d-flex justify-content-center flex-column align-items-center">
                            <UploadIcon />
                            <p className="  cursor-pointer text-dark raleway_font  fw-semibold">
                              Click Here
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <button
                className={`${
                  postData.descp === "" ||
                  postData.title === "" ||
                  uploadImg === ""
                    ? "not_allow"
                    : "cursor-poniter"
                } submit_btn py-2  w-100 mt-3`}
                onClick={() => clickHandler()}
              >
                {loading ? <Loader /> : " Create Post"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
