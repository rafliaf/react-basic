import { useState } from "react";

export const useLikeUnlike = () => {
  const [likeUnlike, setLikeUnlike] = useState("");

  const handleLike = () => {
    alert("Like");
    setLikeUnlike("Like");
  };

  const handleUnlike = () => {
    alert("Unlike");
    setLikeUnlike("Unlike");
  };

  return {
    likeUnlike,
    handleLike,
    handleUnlike,
  };
};
