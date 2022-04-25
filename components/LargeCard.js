import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 ">
      <div className="relative h-96 min-w-[300px]">
        <Image
         alt='LargeCard'
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
          <h3 className="text-4xl mb-8 w-70 text-black bg-green-200 opacity-70 ">{title}</h3>
          <p className="text-1xl mb-8 w-50 text-black bg-green-200 opacity-80">{description}</p>
          <button className="text-sm cursor-pointer text-white bg-gray-900 px-5 py-2 rounded-lg mt-5 hover:scale-105 transition transform duration-300 ease-out">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
