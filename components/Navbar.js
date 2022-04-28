import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className="h-[100px] px-2 pr-20 flex  items-center justify-between sticky z-[999] top-0  bg-[#d1411e] shadow-md">
      <div className="flex items-center">
        <div className="bg-white rounded-full p-[10px] h-[50px] w-[50px] ">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Ftelephone.png?alt=media&token=886069a1-837e-4183-8898-2e7d7daa0286"
            objectFit="cover"
            alt="phone"
            width="32"
            height="32"
          />
        </div>

        <div className=" ml-[14px] text-white text-center ">
          <div className="font-medium text-[12px]">COMMANDER</div>
          <div className=" font-bold text-[20px]">04.95.45.65.25</div>
        </div>
      </div>
      <div className="flex-3 sm:hidden ">
        <ul className="p-0 flex items-center text-white cursor-pointer">
          <Link href="/" passHref>
            <li className="m-[20px] font-medium transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
              Acceuil
            </li>
          </Link>
          <li className="m-[20px] font-medium transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
            Nos Pizzas
          </li>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/Chez_Francis__1_-removebg-preview.png?alt=media&token=fb3bb095-a091-4d04-b690-00c60f2ba4cb"
            objectFit="cover"
            alt="logo"
            width="160"
            height="69"
          />
          <li className="m-[20px] font-medium transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
            Nos Boissons
          </li>
          <li className="m-[20px] font-medium transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
            Contact
          </li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className="justify-end">
          <div className="relative cursor-pointer transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fcart.png?alt=media&token=1d4feadf-2329-427e-bce5-76f9f771c55f"
              objectFit="contain"
              alt="logo"
              width="30"
              height="30"
            />
            <div className="absolute justify-center top-[-10px] right-[-10px] w-[20px] h-[20px] p-[3px] flex items-center rounded-full text-[#d1411e] bg-white font-bold">
              {quantity}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
