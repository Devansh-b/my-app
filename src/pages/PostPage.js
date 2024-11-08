import React from "react";
import PostForm from "./postform/PostForm";
import LeftSec from "./userpage/LeftSec";
const PostPage = () => {
  return (
    <div className="overflow-hidden min-h-screen">
      <div className="flex pt-8 bg-green-50 w-full min-h-screen">
        <PostForm />
      </div>
    </div>
  );
};

export default PostPage;
