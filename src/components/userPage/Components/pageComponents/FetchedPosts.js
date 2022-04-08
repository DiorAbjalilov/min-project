import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsApi } from "../../../../store/actions";
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
              <div key={index} className="card mb-2">
                <div className="card-header">
                  {post.userName} {post.lastName}
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{post.comment}</p>
                  </blockquote>
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
        </div>
      )}
    </>
  );
};

export default FetchedPosts;
