import { useState } from "react";

const OrderDetail = ({ total, createOrder, setClose  }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  
  const handleCancel = () => { 
  }

  return (
    <div className="">
      <div className="">
      <span onClick={() => setClose(true)} className="">
          X
        </span>
        <h1 className="">Paiement à la Livraison: Pour un Total de {total} €.</h1>
        <h2 className="">Merci pour votre commande.</h2>
        <div className="">
          <label className="">Nom:</label>
          <input
            placeholder="Votre Nom"
            type="text"
            className=""
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className="">
          <label className="">Télephone:</label>
          <input
            type="text"
            placeholder="+33 6 82 45 75 78"
            className=""
          />
        </div>
        <div className="">
          <label className="">Adresse</label>
          <textarea
            rows={5}
            placeholder="Adresse de Livraison"
            type="text"
            className=""
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="" onClick={handleClick}>
          Commander
        </button>
        <span><button className="" onClick={handleCancel}>
          Annuler
        </button></span>
      </div>
    </div>
  );
};

export default OrderDetail;
