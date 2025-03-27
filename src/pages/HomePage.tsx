import { Link, useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToTerms = () => {
    navigate({
      pathname: "/terms",
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Setujui syarat di bawah ini</p>
      <Link to="/terms">Menuju ke halaman terms</Link>
      <button onClick={handleNavigateToTerms}>Terms</button>
      {/* HANYA DI BROWSER GA REQUEST KE SERVER (INSPECT MODE OFFLINE BISA) */}

      {/* FORM HANDLING */}
      <p>Halaman form</p>
      <Link to="/form">Menju ke halaman Form</Link>

      <p>Halaman React Hook Form</p>
      <Link to="/react-hook-form">Menju ke halaman React Hook Form</Link>

      {/* Halaman ke employees pages */}
      <p>Halaman Employess</p>
      <Link to="/employees-page"> Menuju halaman employees page </Link>
    </div>
  );
};

export default HomePage;
