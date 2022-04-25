import { SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import GroupIcon from "@mui/icons-material/Group";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";


function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = (e) => {
    e.preventDefault();
    setSearchInput("");
    setNoOfGuests(1);
  };

  const search = () => {
    router.push({
      pathname:"/search",
    query:{
      location: searchInput,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    noOfGuests,
    },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-2 md:px-10">
      {/* LEFT*/}

      <div
        onClick={()=> router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <h1 className="text-red-500">Coza Booking</h1>
      </div>
      {/* MIDDLE - Search*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Entrer pour rechercher..."}
        />
        <SearchIcon className="hidden md:inline-flex h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* RIGHT*/}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Deviens notre hote</p>
        <LocalHotelIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">{"Nombre d'Hotes"}</h2>

            <GroupIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Annuler
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Rechercher
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
