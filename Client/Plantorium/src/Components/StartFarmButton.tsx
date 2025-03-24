import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router";

const StartFarmButton = ({ className, text }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={className} onClick={() => navigate("/CreateFarm")}>
        {text}
        <FaArrowTrendUp />
      </button>
    </div>
  );
};

export default StartFarmButton;
