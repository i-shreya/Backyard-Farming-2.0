import {
  PiNumberCircleOneLight,
  PiNumberCircleThreeLight,
  PiNumberCircleTwoLight,
} from "react-icons/pi";
import { motion } from "motion/react";
const HowDoesItWork = () => {
  return (
    <div className="w-full  bg-[#f7fff7] mt-10 pb-20 text-white font-poppins">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className=" text-black text-6xl  flex justify-center tracking-wide"
      >
        How Does It Work ?
      </motion.div>
      <div className="font-bold text-black my-5  text-lg flex justify-center tracking-wide">
        AI analyzes your unique backyard farm and provides personalized guidance
      </div>
      <div className="flex w-full justify-between mt-5">
        <div className="text-black w-96 flex flex-col items-center gap-5  ">
          <PiNumberCircleOneLight size={64} />
          <div className="text-black text-2xl mr-5 ml-2  text-center font-poppins  tracking-wide">
            Upload Your Plant Photos
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2 text-center ">
            Start by uploading pictures of your plants or the crops you want to
            grow. Don’t have photos? No problem! Select from a list of popular
            crops to get started.
          </div>
        </div>
        <div className="text-black w-96  flex flex-col items-center  gap-5 rounded-lg">
          <PiNumberCircleTwoLight size={64} />
          <div className="text-black text-2xl mr-5 ml-2 text-heading font-poppins tracking-wide">
            Receive Weekly Roadmap
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2  text-center font-poppins">
            Based on your plant choice, we’ll create a tailored weekly roadmap
            with all the steps you need to help your plants thrive.
          </div>
        </div>
        <div className="text-black w-96  flex flex-col gap-5 items-center">
          <PiNumberCircleThreeLight size={64} />
          <div className="text-black text-2xl mr-5 ml-2 text-center font-poppins tracking-wide">
            Track Your Progress
          </div>
          <div className="text-base text-gray-600 mr-5 ml-2 text-center font-poppins">
            Check off completed tasks each week, track your progress, and share
            tips and experiences with other backyard gardeners
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
