import ProfileImg from "./../assets/profile.jpg";
import { HiOutlineBell } from "react-icons/hi";

function Header() {
  return (
    <div className="flex justify-between rounded-2xl  border-black    text-black">
      <div>
        <h1 className="text-4xl text-black">
          Hello, <span className="font-semibold ">Manupa!</span>
        </h1>
        <p className="mt-4 text-lg text-black">
          Your devices are under your control.
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex h-full flex-col items-end justify-between">
          <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-black  bg-off_white">
            <HiOutlineBell
              width={20}
              height={20}
              className="block text-black"
            />
          </div>
        </div>
        <img src={ProfileImg} className="block h-20 w-20 rounded-full" alt="" />
      </div>
    </div>
  );
}

export default Header;
