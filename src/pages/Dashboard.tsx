import { useNavigate } from "react-router-dom";
import { Button } from "../components";

const Dashboard = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Button
      variant="destructive"
      className="rounded-md"
      text="Logout"
      onClick={logoutHandler}
    />
  );
};

export default Dashboard;
