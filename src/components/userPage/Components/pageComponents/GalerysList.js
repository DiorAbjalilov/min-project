import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading/Loading";
import "./galeryStyle.css";
import ModalImage from "./ModalImage";
import { getImgsApi } from "../../../../store/actions";

const GalerysList = () => {
  const isLoader = useSelector((state) => state.posts.isLoading);
  const imgs = useSelector((state) => state.imgs.imgs.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImgsApi());
  }, []);
  if (isLoader) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <>
      <ModalImage />
      <div id="container">
        {imgs.map((img, index) => {
          return (
            <div className="polaroid" key={index}>
              <img className="photo" src={img.image} alt="" />
              <div className="capition">
                <h2>{img.title}</h2>
                <p>{img.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalerysList;
