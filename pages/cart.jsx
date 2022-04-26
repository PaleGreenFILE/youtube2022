import Image from "next/image";
import { useState } from "react";
const Cart = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex p-5 sm:flex-col sm:p-5">
      <div className="flex-2 w-full ">
        <table className="divide-y w-[100%] border table-auto sm:flex sm:flex-col sm:items-center sm:justify-center text-left">
          <tbody>
            <tr className="sm:hidden">
              <th>Produits</th>
              <th>Nom</th>
              <th>Extras</th>
              <th>Prix</th>
              <th>Quantités</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody className="">
            <tr
              className="sm:flex-col sm:flex sm:items-center sm:text-center"
              key=""
            >
              <td className=" ">
                <div className="relative p-12 ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/pizza%2Fpizza.png?alt=media&token=75614a83-38cb-4823-a921-d7eff8a29bb4"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className="font-medium text-lg text-center sm:p-14 text-[#d1411e] ">
                  CHEVRE MIEL
                </span>
              </td>
              <td>
                <span key="" className="">
                  Sauce Tomate, Sans Roquette
                </span>
              </td>
              <td>
                <span className="sm:before:content-['Prix:_'] sm:before:font-medium">
                  19,90 €
                </span>
              </td>
              <td>
                <span className="sm:before:content-['Quantité:_'] sm:before:font-medium">
                  2
                </span>
              </td>
              <td>
                <span className="font-medium text-lg sm:before:content-['Total:_'] sm:before:font-medium ">
                  39,90 €
                </span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="sm:hidden">
              <th>Produits</th>
              <th>Nom</th>
              <th>Extras</th>
              <th>Prix</th>
              <th>Quantités</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody className="">
            <tr
              className="sm:flex-col sm:flex sm:items-center sm:text-center"
              key=""
            >
              <td className=" ">
                <div className="relative p-12  ">
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/pizza%2Fpizza.png?alt=media&token=75614a83-38cb-4823-a921-d7eff8a29bb4"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className="font-medium text-lg text-center  text-[#d1411e] ">
                  CHEVRE MIEL
                </span>
              </td>
              <td>
                <span
                  key=""
                  className="text-center items-center justify-center"
                >
                  Sauce Tomate, Sans Roquette
                </span>
              </td>
              <td>
                <span className="sm:before:content-['Price:_'] sm:before:font-medium">
                  19,90 €
                </span>
              </td>
              <td>
                <span className="sm:before:content-['Quantité:_'] sm:before:font-medium">
                  2
                </span>
              </td>
              <td>
                <span className="font-medium text-lg sm:before:content-['Total:_'] sm:before:font-medium  ">
                  39,90 €
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1 sm:pt-5 ">
        <div className="bg-[#333] w-[100%]  p-[30px] pt-[10px] max-h-80 text-white shadow-lg ">
          <h2 className="text-lg text-center  p-5 mb-2 font-bold ">
            PANIER TOTAL
          </h2>
          <div className="">
            <b className="mr-9">Sous-Total :</b>79 €
          </div>
          <div className="">
            <b className="mr-3">Pizza Offerte :</b> Non
          </div>
          <div className="">
            <b className="mr-20">Total :</b>80 €
          </div>
          <button
            onClick={() => setOpen(true)}
            className="transition ease-in-out delay-4000  hover:-translate-y-1 hover:scale-105 w-56 shadow-lg h-10 bg-[#d1411e] text-white font-bold cursor-pointer mt-5"
          >
            PAIEMENT !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
