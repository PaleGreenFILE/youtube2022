import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className=" flex flex-col w-56 my-10 md:my-20 p-1 md:ml-8 hover:opacity-75 items-center justify-center cursor-pointer shadow-md shadow-black-500/50 transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110  duration-300">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/pizza%2Fpizza.png?alt=media&token=75614a83-38cb-4823-a921-d7eff8a29bb4"
        alt=""
        width="120"
        height="120"
      />
      <h1 className="text-xl font-bold text-[#d1411e]">PIZZA CHORIZO</h1>
      <span className="text-xl font-bold text-[#666]">12,50€</span>
      <p className="items-center text-center text-[#777]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
