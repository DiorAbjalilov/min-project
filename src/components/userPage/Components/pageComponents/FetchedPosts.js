import React from "react";

const FetchedPosts = () => {
  const posts = [];
  if (posts) {
    return (
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button">
          See all
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="card mb-2">
        <div className="card-header">User Name</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              "TITLE" A well-known quote, contained in a blockquote element.
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );
};

export default FetchedPosts;
