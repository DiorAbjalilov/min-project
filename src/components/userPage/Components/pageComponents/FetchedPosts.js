import React from "react";

const FetchedPosts = () => {
  const posts = [];
  if (posts) {
    return (
      <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">
          See all
        </button>
      </div>
    );
  }
  return (
    <>
      <div class="card mb-2">
        <div class="card-header">User Name</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
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
