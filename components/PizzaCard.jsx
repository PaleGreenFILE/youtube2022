import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className=" flex flex-col w-56 my-10  hover:opacity-75 items-center justify-center cursor-pointer shadow-md shadow-black-500/50 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="120" height="120" />
      </Link>
      <h1 className="text-xl font-bold text-[#d1411e]">{pizza.title}</h1>
      <span className="text-xl font-bold text-[#666]">{pizza.prices[0]} €</span>
      <p className="items-center text-center text-[#777]">{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
