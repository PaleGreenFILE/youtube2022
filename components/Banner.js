import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/coza-booking.appspot.com/o/assets%2Fmohamed.jpg?alt=media&token=5b093194-fa6f-4e9a-9530-12ff205db9a4"
        layout="fill"
        objectFit="cover"       
        alt="banner"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-white text-sm sm:text-lg">
          {" Vous n'êtes pas sur d'être au bon endroit ? Parfait"}
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:scale-105 hover:shadow-xl active:scale-90 transition duration-300 ease-out">
          Alors Cliquez-moi
        </button>
      </div>
    </div>
  );
}

export default Banner;
