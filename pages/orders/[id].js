import Image from "next/image";
import styles from "./order.module.css";

import  axios  from 'axios';

const Order = ({order}) => {
  
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className=" flex p-5 sm:flex-col h-full ">
      <div className="flex-2 w-full ">
        <table className="w-full border sm:flex sm:flex-col sm:items-center sm:justify-center text-left">
          <tbody>
            <tr className="sm:hidden">
              <th>Order ID</th>
              <th>Nom</th>
              <th>Adresse</th>
              <th>Phone</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody className="">
            <tr
              className="sm:flex-col sm:flex sm:items-center sm:justify-center sm:text-center"
              key=""
            >
              <td>
                <span className="font-medium text-[15px] items-center justify-center text-center  text-[#d1411e] sm:before:content-['Order:_'] sm:before:text-black sm:before:font-medium ">
                 {order._id}
                </span>
              </td>
              <td>
                <span
                  key=""
                  className="sm:before:content-['Nom:_'] sm:before:font-medium"
                >
                  {order.customer}
                </span>
              </td>
              <td>
                <span className="sm:before:content-['Adresse:_'] sm:before:font-medium">
                {order.address}
                </span>
              </td>
              <td>
                <span className="sm:before:content-['Phone:_'] sm:before:font-medium">
                  06.85.45.75.85.45
                </span>
              </td>
              <td>
                <span className="font-medium text-lg sm:before:content-['Total:_'] sm:before:font-medium  ">
                {order.total} €
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between w-[95%] sm:pt-20">
          <div className={statusClass(0)}>
            <Image
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fpaid.png?alt=media&token=bccfc291-e1d7-4e25-a83e-2b76436dafaa"
              width={30}
              height={30}
            />
            <span>Paiement</span>
            <div className={styles.checkedIcon}>
              <Image
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fchecked.png?alt=media&token=9762dfa8-6da5-4c62-95c0-20396543c0bb"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fbake.png?alt=media&token=c1ff9c57-275f-479e-9851-cbb642a1d2c6"
              width={30}
              height={30}
            />
            <span>Préparation</span>
            <div className={styles.checkedIcon}>
              <Image
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fchecked.png?alt=media&token=9762dfa8-6da5-4c62-95c0-20396543c0bb"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fbike.png?alt=media&token=78cd1555-8096-43b9-898b-583c54ad376c"
              width={30}
              height={30}
            />
            <span>Livraison</span>
            <div className={styles.checkedIcon}>
              <Image
                alt=""
                className={styles.checkedIcon}
                src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fchecked.png?alt=media&token=9762dfa8-6da5-4c62-95c0-20396543c0bb"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(3)}>
            <Image
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fdelivered.png?alt=media&token=bca44481-f2fb-45c4-93f6-8d86c3a89fce"
              width={30}
              height={30}
            />
            <span>Livré</span>
            <div className={styles.checkedIcon}>
              <Image
                alt=""
                className={styles.checkedIcon}
                src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fchecked.png?alt=media&token=9762dfa8-6da5-4c62-95c0-20396543c0bb"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
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
            disabled
            className="w-56 shadow-lg h-10 bg-white text-teal-500 font-bold mt-5"
          >
            PAIEMENT EFFECTUER
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
