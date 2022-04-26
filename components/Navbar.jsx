import Image from "next/image";

function Navbar() {
  return (
    <div className="overflow-hidden flex items-center sticky z-[999] top-0 justify-between bg-[#d1411e]  shadow-md  h-28  ">
      <div className="relative">
        <div className="absolute p-2 w-10 h-10 rounded-full bg-white sm:ml-2 ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Ftelephone.png?alt=media&token=886069a1-837e-4183-8898-2e7d7daa0286"
            objectFit="cover"
            alt="phone"
            width="32"
            height="32"
          />
        </div>

        <div className="px-14  items-center font-medium text-white sm:ml-2 ">
          <div className="font-medium text-xs">COMMANDER</div>
          <div className=" text-xl font-bold">04.95.45.65.25</div>
        </div>
      </div>
      <div className="pr-40 sm:hidden ">
        <ul className="p-0 flex items-center text-white cursor-pointer">
          <li className="m-5 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
            Acceuil
          </li>
          <li className="m-5 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
            Nos Pizzas
          </li>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Flogo.png?alt=media&token=8ea05126-0560-4159-9460-7fc2ba48cd13"
            objectFit="cover"
            alt="logo"
            width="160"
            height="69"
          />
          <li className="m-5 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
            Nos Boissons
          </li>
          <li className="m-5 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
            Contact
          </li>
        </ul>
      </div>
      <div className="">
        <div className="relative sm:mr-10 sm:mt-5 cursor-pointer transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fcart.png?alt=media&token=1d4feadf-2329-427e-bce5-76f9f771c55f"
            objectFit="contain"
            alt="logo"
            width="30"
            height="30"
          />
          <div className="absolute flex items-center justify-center -top-3 -right-3 w-5 h-5 rounded-full text-[#d1411e] bg-white p-0.5">
            2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
