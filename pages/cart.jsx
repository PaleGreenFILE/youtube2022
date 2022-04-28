import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import Modals from './../components/Modals';

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "EUR";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <div className=" z-10 flex p-5 sm:flex-col sm:p-5 h-[calc(100vh-100px)] z-999">
      <div className="flex-2 w-full ">
        <table className="divide-y  bg-slate-100 w-[100%] border table-auto sm:flex sm:flex-col sm:items-center sm:justify-center text-left">
          <tbody>
            <tr className="sm:hidden ">
              <th>Produits</th>
              <th>Nom</th>
              <th>Extras</th>
              <th>Prix</th>
              <th>Quantités</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr
                className="sm:flex-col sm:flex sm:items-center sm:text-center"
                key={product._id}
              >
                <td className=" ">
                  <div className="relative p-12 ">
                    <Image
                      src={product.img}
                      width="100px"
                      height="100px"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className="font-medium text-lg text-center sm:p-14 text-[#d1411e] ">
                    {product.title}
                  </span>
                </td>
                <td>
                  <span className="extra">
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text},</span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className="sm:before:content-['Prix:_'] sm:before:font-medium">
                    {product.price} €
                  </span>
                </td>
                <td>
                  <span className="sm:before:content-['Quantité:_'] sm:before:font-medium">
                    {product.quantity}
                  </span>
                </td>
                <td>
                  <span className="font-medium text-lg sm:before:content-['Total:_'] sm:before:font-medium ">
                    {product.price * product.quantity} €
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 sm:pt-5 ">
        <div className="bg-[#333] w-[100%]  p-[30px] pt-[10px] max-h-80 text-white shadow-lg ">
          <h2 className="text-lg text-center  p-5 mb-2 font-bold ">
            PANIER TOTAL
          </h2>
          <div className="">
            <b className="mr-9">Sous-Total :</b>
            {cart.total} €
          </div>
          <div className="">
            <b className="mr-3">Pizza Offerte :</b> Non
          </div>
          <div className="">
            <b className="mr-20">Total :</b> {cart.total}
          </div>
          {open ? (
            <div className="mt-[10px] flex flex-col">
              <button
                className="cursor-pointer mb-[5px] bg-white text-teal-500 font-bold"
                onClick={() => setCash(true)}
              >
                Paiement à La Livraison
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AZvcB66hBwN7KpHwS5AxOKr908UykGqgBKliuOXjXoaYRtAjP783ZiUltENXV2dgvEVp0oYz9Jz1Pt9l",
                  components: "buttons",
                  currency: "EUR",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="transition ease-in-out delay-4000  hover:-translate-y-1 hover:scale-105 w-56 shadow-lg h-10 bg-[#d1411e] text-white font-bold cursor-pointer mt-5"
            >
              METHODE DE PAIEMENT !
            </button>
          )}
        </div>
      </div>
      {cash && <Modals total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
