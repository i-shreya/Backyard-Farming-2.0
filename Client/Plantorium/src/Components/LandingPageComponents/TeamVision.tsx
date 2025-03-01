import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import arin from "../../Assests/ARIN.png";
import shreya from "../../Assests/SHREYA.png";
import shubhra from "../../Assests/SHUBHRA.png";
import shubhraHover from "../../Assests/Shubhra_Bg.png";
import arinHover from "../../Assests/arin_bg.png";
import shreyaHover from "../../Assests/shreya_hover_bg.png";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TeamVision = () => {
  const [hovered, setHovered] = useState({
    box1: false,
    box2: false,
    box3: false,
  });
  return (
    <div className="h-[100vh] w-screen bg-black text-white  ">
      <div className="flex flex-col justify-between h-full pt-10 px-20">
        <div className="w-full flex justify-between ">
          <div className="flex flex-col items-start ">
            <p>
              <motion.span
                initial={{ x: 80 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-5xl inline-block "
              >
                THE
              </motion.span>
              <br></br>
              <motion.span
                initial={{ y: -90 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-8xl text-yellow-300 tracking-widest font-bold inline-block"
              >
                CREATIVE
              </motion.span>
              <br></br>
            </p>
            <motion.p
              initial={{ x: -40 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-5xl self-end inline-block"
            >
              TEAM
            </motion.p>
          </div>
          <div className="self-end w-[55%]">
            <p className="text-center text-xl text-[#e9e9e9] mb-3">
              At Backyard Farming 2.0, we dream of a future where every backyard
              transforms into a flourishing, sustainable haven. Our mission is
              to empower individuals to cultivate their own green spaces by
              blending the magic of nature with the precision of AI. Together,
              we're making farming smarter, simpler, and more rewarding.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-2/3 h-[70vh] flex items-end"
          >
            <motion.div
              whileHover={{ height: "100%" }}
              onHoverStart={() =>
                setHovered((prev) => ({ ...prev, box1: true }))
              }
              onHoverEnd={() =>
                setHovered((prev) => ({ ...prev, box1: false }))
              }
              className="bg-[#a8d1d1]  h-[70%] w-96 rounded-t-full flex flex-col items-center justify-between"
            >
              <div className="mt-20 text-black text-2xl">
                {" "}
                Arin Zingade
                <div
                  className={`flex justify-center gap-5 mt-5 ${
                    !hovered.box1 ? "hidden" : ""
                  }`}
                >
                  <FaGithub />
                  <FaLinkedin />
                </div>
              </div>
              <div className="h-2/3 flex">
                <img src={hovered.box1 ? arinHover : arin} />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ height: "100%" }}
              onHoverStart={() =>
                setHovered((prev) => ({ ...prev, box2: true }))
              }
              onHoverEnd={() =>
                setHovered((prev) => ({ ...prev, box2: false }))
              }
              className="bg-[#f9ed85] h-[90%] w-96 rounded-t-full flex flex-col items-center justify-between"
            >
              <div className="mt-20 text-black text-2xl tracking-wide">
                Shubhra Tiwary
                <div
                  className={`flex justify-center gap-5 mt-5 ${
                    !hovered.box2 ? "hidden" : ""
                  }`}
                >
                  <FaGithub />
                  <FaLinkedin />
                </div>
              </div>
              <div className="h-2/3 flex">
                <img src={hovered.box2 ? shubhraHover : shubhra} />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ height: "100%" }}
              onHoverStart={() =>
                setHovered((prev) => ({ ...prev, box3: true }))
              }
              onHoverEnd={() =>
                setHovered((prev) => ({ ...prev, box3: false }))
              }
              className="  bg-[#f197c0] h-[80%] w-96 rounded-t-full flex flex-col items-center justify-between"
            >
              <div className="mt-20 text-black text-2xl">
                Shreya Soni
                <div
                  className={`flex justify-center gap-5 mt-5 ${
                    !hovered.box3 ? "hidden" : ""
                  }`}
                >
                  <FaGithub />
                  <FaLinkedin />
                </div>
              </div>
              <div className="h-2/3 flex ">
                <img src={hovered.box3 ? shreyaHover : shreya} />
              </div>
            </motion.div>
          </motion.div>
          <div className="flex flex-col text-3xl items-center self-end gap-10 p-10">
            <div>Blogs</div>
            <div>FAQs</div>
            <div>Home</div>
            <button className="px-5 py-5 bg-[#888888] rounded-full flex items-center  underline decoration-white">
              Know More <MdOutlineArrowOutward size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamVision;
