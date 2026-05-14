import { useNavigate } from "react-router-dom";

import Places from "../../components/Places";

import "./index.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <Places />
    </div>
  );
}

export default Home;
