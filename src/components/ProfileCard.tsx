type ProfileCard = {
  name?: string;
  year: number;
  //tanda tanya menandakan opsional
  job?: string;
};

const ProfileCard = (props: ProfileCard) => {
  const { name, year, job } = props;
  return (
    <div className="card">
      <p>Name: {name ?? "Anonymous"} </p>
      <p>Birthyear: {year} </p>

      {/*if ternary condition */}
      {job ? <p>Job: {job}</p> : null}
    </div>
  );
};

export default ProfileCard;
