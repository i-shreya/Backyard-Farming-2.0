const Navbar = () => {
  return (
    <div className="p-5 flex justify-between items-start">
      <div className="">Backyard Farming 2.O</div>
      <div className="flex justify-around w-1/3">
        <a href="#">How It Works</a>
        <a href="#">Plans</a>
        <a href="#">FAQS</a>
        <div className="flex gap-10 ">
          <button className="bg-green-600 px-5 py-2 rounded-full">LogIn</button>
          <button className="bg-green-600 px-5 py-2 rounded-full">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
