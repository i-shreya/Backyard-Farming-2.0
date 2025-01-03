import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import BannerPic from "../Assests/BannerImage-lightTheme.png";
import StartFarmButton from "./StartFarmButton";
const BannerImage = () => {
  return (
    <div className="pt-5 pb-20 w-full h-dvh flex justify-between">
      <div className="w-1/2 relative mt-5 ml-5 mb-10 flex flex-col gap-10">
        <div className="text-9xl text-[#3ba944] font-heading">
          Backyard Farming 2.0
        </div>
        <div className="pl-3 text-4xl text-[#216125]  font-dancing">
          Turn your backyard into a thriving ecosystem with personalized guides.
          Your sustainable journey begins now with Backyard Farming 2.O !!!
        </div>
        <SignedIn>
          <StartFarmButton
            className="mt-20 ml-20 text-5xl  font-dancing py-2 px-16 border-[#3ba944] border-y-2 "
            text="Get Started"
          />
        </SignedIn>
        <SignedOut>
          <div className="mt-20 flex gap-80">
            <SignUpButton>
              <button className="text-3xl  py-2 px-16 border-[#3ba944] border-y-2 font-dancing font-bold">
                Sign Up
              </button>
            </SignUpButton>
            <SignInButton>
              <button className="text-3xl  py-2 px-16 border-[#3ba944] border-y-2 font-dancing  font-bold">
                Log In
              </button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>

      <img src={BannerPic} className="object-cover rounded-2xl  " />
    </div>
  );
};

export default BannerImage;
