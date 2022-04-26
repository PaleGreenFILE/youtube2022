import Head from "next/head";
import Banner from "../components/Banner";
import Header from "./../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCards from "../components/MediumCards";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Coza Booking || 2023</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="description"
          content="Coza Booking , votre nouvel recherche de locations de Vacances"
        />
<script src="https://www.google.com/recaptcha/api.js?render=6Ld9TqMfAAAAAAmYZsmwCUFenZ10V5EQTjRNu2gF"></script>        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Banner*/}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className=" text-4xl font-semibold pb-5 text-center">
            Explorez Nos Chambres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img }) => (
              <SmallCard key={img} src={img} />
            ))}
          </div>
        </section>

        <section>
          <h2 className=" text-4xl font-semibold py-8 text-center">
            Vivre n'importe où !
          </h2>          

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img }) => (
              <MediumCards key={img} src={img} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://firebasestorage.googleapis.com/v0/b/coza-booking.appspot.com/o/assets%2Fanmol-seth-hDbCjHNdF48-unsplash.jpg?alt=media&token=5411b63f-2599-4c63-857e-713cd6f24267"
          title="Nos Meilleures Endroits"
          description="Venez découvrir un endroit Paradisiaque"
          buttonText="Soyez Inspirés"
        />
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  );
}



export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/K7Z7").then((res) =>
    res.json()
  );

  const cardsData = await fetch("https://jsonkeeper.com/b/K7Z7").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
