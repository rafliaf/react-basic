import { useLikeUnlike } from "../hooks/useLikeUnlike";

const LikeUnlike = () => {
  const { likeUnlike, handleLike, handleUnlike } = useLikeUnlike();

  return (
    <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
      <button onClick={handleLike}>Like</button>
      <p>{likeUnlike}</p>
      <button onClick={handleUnlike}>Unlike</button>
    </div>
  );
};

export default LikeUnlike;
