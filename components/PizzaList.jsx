import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className="flex flex-col items-center p-2.5 pl-5 ">
      <h1 className="text-1xl m-5 from-neutral-900 font-bold md:text-[40px] ">
        Meilleurs PIZZA d'Ajaccio
      </h1>
      <p className="text-1xl w-9/1 items-center justify-center text-[#444]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis magni
        eius, sed dolorem blanditiis numquam odio harum voluptatibus fugit! Sunt
        quis exercitationem at voluptatibus, alias laborum tenetur?
      </p>
      <div className="flex items-center justify-center w-full m-5 flex-wrap">
        <PizzaCard />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" />
        <PizzaCard className="" /> 
        <PizzaCard className="" />
      </div>
    </div>
  );
};

export default PizzaList;
