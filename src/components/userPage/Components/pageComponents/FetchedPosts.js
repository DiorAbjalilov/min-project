import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postFetchApi, { getPostsApi } from "../../../../store/actions";
import Loading from "./loading/Loading";
import "./stye.css";
import { Pagination, Stack } from "@mui/material";
const FetchedPosts = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const isLoader = useSelector((state) => state.posts.isLoading);

  const mouseEnterHandeler = (e, index) => {
    const trash_id = document.querySelectorAll(".trash-id")[index];
    if (trash_id.classList[1] === "active") {
      trash_id.classList.remove("active");
    } else {
      document.querySelectorAll(".trash-id").forEach((trash_one) => {
        trash_one.classList.remove("active");
      });
      trash_id.classList.add("active");
    }
  };

  if (!posts.success) {
    return (
      <>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            onClick={() => dispatch(getPostsApi())}
            className="btn btn-primary"
            type="button"
          >
            See all
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {!isLoader ? (
        posts.data.map((post, index) => {
          return (
            <>
              <div
                key={index}
                className="card mb-2"
                onClick={(e) => mouseEnterHandeler(e, index)}
              >
                <div className="card-header">
                  {post.userName} {post.lastName}
                  <span
                    style={{
                      position: "absolute",
                      right: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {post.createdAt.slice(0, 10)} {post.createdAt.slice(11, 16)}
                  </span>
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{post.comment}</p>
                  </blockquote>
                </div>
                <div
                  className="trash-id"
                  onClick={() =>
                    dispatch(
                      postFetchApi(
                        "delete",
                        `http://localhost:5000/api/post/delete/${post._id}`
                      )
                    )
                  }
                >
                  <i className="bx bx-trash"></i>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <Loading />
      )}
      {!isLoader && (
        <div className="page-block">
          <Stack spacing={2}>
            <Pagination
              count={3}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </Stack>
          <button
            type="button"
            style={{ marginTop: "0", fontSize: "18px" }}
            className="btn btn-light"
            onClick={() => dispatch(getPostsApi())}
          >
            <i className="bx bx-reset"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default FetchedPosts;
