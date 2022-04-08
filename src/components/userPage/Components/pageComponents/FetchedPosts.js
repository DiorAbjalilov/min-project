import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsApi } from "../../../../store/actions";
import Loading from "./loading/Loading";

const FetchedPosts = () => {
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
          );
        })
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FetchedPosts;
