import { format } from "date-fns";
import { useRouter } from "next/router";
import Maps from "../components/Maps";
import Header from './../components/Header';
import Footer from './../components/Footer';
import InfoCard from './../components/InfoCard';

function Search({ searchResults }) {
  const router = useRouter();
  console.log(searchResults)
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(Date.now(startDate), "dd/MM/yyyy");
  const formattedEndDate = format(Date.now(endDate),"dd/MM/yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;


  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} hotes`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs ">
            150 + Séjours - {range} - pour {noOfGuests} hotes
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Séjours {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Annulation Fléxible </p>
            <p className="button">Type de Place</p>
            <p className="button">Prix</p>
            <p className="button">Chambres et Lits</p>
            <p className="button">Plus de Filtres</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Maps searchResults={searchResults}/>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getStaticProps(context)  {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
