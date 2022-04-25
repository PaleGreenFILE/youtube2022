import { Rating } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import Image from "next/image";

const MediumCards = (img) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image alt='mediumCard' src={img} layout="fill" className="rounded-xl"/>
        <div className="d">
          <h3 className="text-2xl mt-3">CORSE</h3>
          <button className="miniCard mt-3">Visitez les Hotels</button>
          <Rating className="rating" />
          <div className="note">
            <GradeIcon className="grade" />
            <h3 className="note">3,8</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumCards;
