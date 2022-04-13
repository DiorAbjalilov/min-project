import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_MODAL } from "../../../../store/types";
import { useForm } from "react-hook-form";
import postFetchApi from "../../../../store/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const ModalImage = () => {
  const isModal = useSelector((state) => state.posts.isModal);
  const api = "http://localhost:5000/api/img/add";
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    dispatch(postFetchApi("postImg", api, data));
  };
  return (
    <div>
      <Modal
        open={isModal}
        onClose={() => dispatch({ type: HIDE_MODAL })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                className="form-control"
                type="text"
                id="title"
                placeholder="Enter title"
                aria-label="default input example"
                {...register("title", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="comment">comment</label>
              <textarea
                className="form-control"
                type="text"
                id="comment"
                placeholder="Enter comment"
                aria-label="default input example"
                {...register("comment", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="image">Add img</label>
              <input
                className="form-control"
                type="file"
                id="image"
                placeholder="Default input"
                aria-label="default input example"
                {...register("image", { required: true })}
              />
            </div>
            <button className="btn btn-success w-100">Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalImage;
