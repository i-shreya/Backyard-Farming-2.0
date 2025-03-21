import homePageImage from "../Assests/BannerImage-lightTheme.png";
import { FaArrowTrendUp } from "react-icons/fa6"; 
const HomePage = () => {
  return (
    <div className="flex justify-between px-10 ">
      <div className="w-1/2 flex flex-col gap-20 mt-20">
        <div className="text-6xl font-anakatoria text-center">
          Backyard Farming 2.O
        </div>
        
        <ul className = "text-2xl font-poppins list-disc list-outside space-y-2 pl-20">
          <li> Track growth, update logs, and follow smart suggestions.</li>
          <li> Ask the AI chatbot now for instant farming advice.</li>
          <li> Submit your farm details and let us analyze your setup.</li>
          <li> Get a personalized report with tailored recommendations!</li>
        </ul>
        <div className ="flex justify-center mt-4 ml-10" >
        <button className="flex items-center justify-center gap-3 w-40 hover:px-8 px-3 text-lg underline py-4 bg-black text-white rounded-full">
          Start farm <FaArrowTrendUp />
        </button>
        </div>
       
        <div className="text-3xl font-poppins text-center"></div>
      </div>
      <img src={homePageImage} className="w-[30%] object-cover" />
    </div>
  );
};

export default HomePage;
