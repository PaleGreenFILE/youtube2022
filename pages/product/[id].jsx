import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import axios from "axios";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  return (
    <div className="flex h-screen  sm:h-auto sm:text-center sm:flex-col sm:mt-10 ">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-10/12 h-10/12 relative object-contain sm:h-[50vw] sm:w-[50vw]">
          <Image src={pizza.img} width="500px" height="500px" alt="" />
        </div>
      </div>
      <div className="flex-1">
        <h1 className=" text-4xl font-bold mt-20 py-5 sm:m-1">{pizza.title}</h1>
        <span className="text-[#d1411e] text-[20px] font-normal  border-b border-solid border-[#d1411e]">
          {price} €
        </span>
        <p className="mt-10">{pizza.desc}</p>
        <h3 className="text-xl font-bold mt-10 py-5">Choisissez La Taille :</h3>
        <div className="flex w-2/5 sm:w-[100%] sm:px-24 sm:pt-5">
          <div
            className="relative cursor-pointer"
            onClick={() => handleSize(0)}
          >
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
            onClick={() => handleSize(1)}
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
          {pizza.extraOptions.map((option) => (
            <div
              className=" flex mt-5 mr-5 items-center font-medium sm:text-center "
              key={option._id}
            >
              <input
                className=" w-4 h-4 cursor-pointer "
                type="checkbox"
                id={option.text}
                name={option.text}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double" className="ml-2 ">
                {option.text}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h3 className="mt-10 text-xl font-bold">Choix Des Ingrédients :</h3>
          <div className="flex sm:text-[13px] sm:mx-6 sm:flex-col">
            {pizza.chooseIng.map((option) => (
              <div
                className=" flex mt-5 mr-5 items-center font-medium "
                key={option._id}
              >
                <input
                  className=" w-4 h-4 cursor-pointer "
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="tomato" className="ml-2 ">
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-10  sm:mx-16 sm:pt-2 sm:m-5 sm:h-20 sm:px-3">
          <input
            className="border-2 border-solid border-[#444] w-14 h-7 sm:h-8 text-center "
            type="number"
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className=" h-8 w-40 ml-5 bg-[#d1411e] font-medium text-white shadow-xl"
            onClick={handleClick}
          >
            Ajouter Panier
          </button>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
