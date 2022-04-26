import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="flex justify-between  bg-[#222] sm:h-auto">
        <div className=" flex h-[100px] relative object-cover">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Fbg.png?alt=media&token=43f9ba7a-39d4-4662-a1eb-87317fbc4822"
            layout="fill"
            alt="footer"
          />
        </div>
        <div className=" flex-row ">
          <div className=" flex-1 px-5">
            <h2 className="text-sm text-center  p-5 mb-2 font-bold text-[rgb(211,211,211)]">
              DE BONNE PIZZA ,SUPER BIEN GARNIE ET LIVRAISON 2 €
            </h2>
          </div>
          <div className="flex-1 items-center text-center justify-center">
            <h1 className="text-xl font-bold  text-[#b7903c]">
              OU NOUS TROUVER
            </h1>
            <p className=" text-[rgb(211,211,211)]">
              Av. Maréchal Juin
              <br />
              Ajaccio, 20090
              <br />
              04.95.45.65.25
            </p>
          </div>
          <div className="flex-1 pb-5 items-center  text-center">
            <h1 className="text-xl  font-bold  text-[#b7903c]">
              Horaires d'Ouvertures
            </h1>
            <p className="text-[rgb(211,211,211)]">
              Lundi - Dimanche
              <br />
              18:00 - 22:00
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col text-xs text-[rgb(211,211,211)] bg-[#222] items-center justify-center text-center">
          <p>
            <i>Angels DEV Tous Droits Résérvés Copyright © 2023 </i>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
