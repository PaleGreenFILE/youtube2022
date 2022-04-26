import Image from "next/image";
import { useState } from "react";
import Navbar from "./../../components/Navbar";

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/pizza%2Fpizza.png?alt=media&token=75614a83-38cb-4823-a921-d7eff8a29bb4",
    name: "CHEVRE MIEL",
    price: [8.5, 11.5],
    desc: `"Créme Fraiche ou Tomate au choix , Chêvre , Emmental , Mozza , Miel , Roquette"`,
  };

  return (
    <div className="flex h-screen  sm:h-auto sm:text-center sm:flex-col sm:mt-10 ">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-10/12 h-10/12 relative object-contain sm:h-[50vw] sm:w-[50vw]">
          <Image src={pizza.img} width="600px" height="600px" alt="" />
        </div>
      </div>
      <div className="flex-1">
        <h1 className=" text-4xl font-bold mt-20 py-5 sm:m-1">{pizza.name}</h1>
        <span className="text-[#d1411e] text-[20px] font-normal  border-b border-solid border-[#d1411e]">
          {pizza.price[size]} €
        </span>
        <p className="mt-10">{pizza.desc}</p>
        <h3 className="text-xl font-bold mt-10 py-5">Choisissez La Taille :</h3>
        <div className="flex w-2/5 sm:w-[100%] sm:px-24 sm:pt-5">
          <div className="relative cursor-pointer" onClick={() => setSize(0)}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fsize.png?alt=media&token=b078f0f5-09fd-40cd-a7ab-de1d524ee83a"
              alt=""
              width="30px"
              height="30px"
            />
            <span className="absolute -top-1  bg-teal-500 text-white text-[12px] p-0  rounded-xl">
              Petite
            </span>
          </div>
          <div
            className="relative cursor-pointer ml-16"
            onClick={() => setSize(1)}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fsize.png?alt=media&token=b078f0f5-09fd-40cd-a7ab-de1d524ee83a"
              alt=""
              width="40px"
              height="40px"
            />
            <span className="absolute -top-1 -right-5 bg-teal-500 text-white text-[12px] p-0 rounded-xl">
              Grande
            </span>
          </div>
        </div>
        <h3 className="mt-10 text-xl font-bold ">
          Ingredients Supplémentaires :
        </h3>
        <div className="flex  sm:text-[13px] sm:mx-6 sm:flex-col ">
          <div className=" flex mt-5 mr-5 items-center font-medium sm:text-center ">
            <input
              className=" w-4 h-4 cursor-pointer "
              type="checkbox"
              id="double"
              name="double"
            />
            <label htmlFor="double" className="ml-2 cursor-pointer">
              Double Ingrédients
            </label>
          </div>
          <div className="flex mt-5 items-center  mr-5 font-medium ">
            <input
              className=" w-4 h-4 cursor-pointer "
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy" className="ml-2 cursor-pointer">
              Double Sauce
            </label>
          </div>
          <div className="flex mt-5 items-center font-medium ">
            <input
              className=" w-4 h-4 cursor-pointer "
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese" className="ml-2 cursor-pointer">
              Double Fromage
            </label>
          </div>
        </div>
        <h3 className="mt-10 text-xl font-bold">
          Choix Des Ingrédients :
        </h3>
        <div className="flex sm:text-[13px] sm:mx-6 sm:flex-col">
          <div className=" flex mt-5 mr-5 items-center font-medium ">
            <input
              className=" w-4 h-4 cursor-pointer "
              type="checkbox"
              id="tomato"
              name="tomato"
            />
            <label htmlFor="tomato" className="ml-2 cursor-pointer">
              Sauce Tomate
            </label>
          </div>
          <div className="flex mt-5 items-center font-medium ">
            <input
              className=" w-4 h-4 cursor-pointer "
              type="checkbox"
              id="cream"
              name="cream"
            />
            <label htmlFor="cream" className="ml-2 cursor-pointer">
              Créme Fraiche
            </label>
          </div>
          <div className="flex mt-5 items-center  mr-5 font-medium ">
            <input
              className=" w-4 h-4 cursor-pointer "
              type="checkbox"
              id="salad"
              name="salad"
            />
            <label htmlFor="salad" className="ml-2 cursor-pointer">
              Sans Roquette
            </label>
          </div>
        </div>
        <div className="flex mt-10 sm:mx-16 sm:pt-2 sm:m-5 sm:h-20 sm:px-3">
          <input
            className=" border-2 border-solid border-[#444] w-14 h-7 sm:h-8 sm:text-center "
            type="number"
            defaultValue={1}
            
          />
          <button className=" h-8 w-40 ml-5 bg-[#d1411e] font-medium text-white shadow-xl  ">
            Ajouter Panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
