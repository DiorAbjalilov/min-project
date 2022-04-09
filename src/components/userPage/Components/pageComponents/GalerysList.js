import React from "react";
import { useSelector } from "react-redux";
import Loading from "./loading/Loading";
import "./galeryStyle.css";
import ModalImage from "./ModalImage";

const GalerysList = () => {
  const isLoader = useSelector((state) => state.posts.isLoading);
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
        <div className="polaroid">
          <img
            className="photo"
            src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=634"
            alt=""
          />
          <div className="capition">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              laudantium nesciunt repudiandae blanditiis nam aliquam itaque
              doloremque nostrum veniam! Voluptate quas in nisi illo natus
              explicabo ullam aut nostrum. Iusto.
            </p>
          </div>
        </div>
        <div className="polaroid">
          <img
            className="photo"
            src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=600"
            alt=""
          />
          <div className="capition">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              laudantium nesciunt repudiandae blanditiis nam aliquam itaque
              doloremque nostrum veniam! Voluptate quas in nisi illo natus
              explicabo ullam aut nostrum. Iusto.
            </p>
          </div>
        </div>
        <div className="polaroid">
          <img
            className="photo"
            src="https://images.unsplash.com/photo-1612886999633-1a6cfbac68f1?&w=600"
            alt=""
          />
          <div className="capition">
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              laudantium nesciunt repudiandae blanditiis nam aliquam itaque
              doloremque nostrum veniam! Voluptate quas in nisi illo natus
              explicabo ullam aut nostrum. Iusto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalerysList;
