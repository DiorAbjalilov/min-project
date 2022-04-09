import React from "react";
import { useDispatch } from "react-redux";
import { SHOW_MODAL } from "../../../../store/types";
import GalerysList from "../pageComponents/GalerysList";

const GalleryList = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <nav
          className="navbar navbar-light"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h5>My Gallery</h5>
          <div style={{ display: "flex" }}>
            <button
              type="button"
              style={{ marginTop: "0", fontSize: "20px", marginRight: "10px" }}
              className="btn btn-light"
            >
              <i className="bx bx-refresh"></i>
            </button>
            <button
              type="button"
              style={{ marginTop: "0", fontSize: "20px" }}
              className="btn btn-success"
              onClick={() => dispatch({ type: SHOW_MODAL })}
            >
              <i className="bx bxs-add-to-queue"></i>
            </button>
          </div>
        </nav>
        <GalerysList />
      </div>
    </>
  );
};

export default GalleryList;
