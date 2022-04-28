import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modals = ({ total, createOrder}) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const handleClick = () => {
    createOrder({ customer, address, total, phone, method: 0 });
  };

  const handleCancel = () => {};
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <Transition.Child>
            <div className="top-0 left-0 absolute z-50 flex items-center justify-center h-[110vh] w-[100vw] ">
              <div className="mt-10 sm:mt-0 shadow-xl z-50 bg-[#FEFEFE] rounded-2xl">
                <div className="md:grid md:grid-cols-2 md:gap-6 z-50 ">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900 w-[500px] bg-[#FEFEFE] p-10 flex flex-col items-center ">
                        Paiement de {total} € à la Livraison !
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 text-center items-center">
                        Pour votre commande merci de laissez vos Informations.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-[#FEFEFE]  sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Nom & Prénom:
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-2 pt-2  block w-full shadow-sm sm:text-sm border-gray-300 focus:bg-gray-100 rounded-md"
                                onChange={(e) => setCustomer(e.target.value)}
                                required
                              />
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="street-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Adresse:
                              </label>
                              <input
                                type="text"
                                name="street-address"
                                id="street-address"
                                autoComplete="street-address"
                                className="mt-2 pt-2  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => setAddress(e.target.value)}
                                required
                              />
                            </div>
                            <div className="col-span-6">
                              <label
                                htmlFor="street-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Numéro de Téléphone:
                              </label>
                              <input
                                type="text"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="phone-number"
                                className="mt-1 pt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Ville:
                              </label>
                              <input
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="address-level2"
                                className="mt-1 pt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label
                                htmlFor="postal-code"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Code Postal:
                              </label>
                              <input
                                type="text"
                                name="postal-code"
                                id="postal-code"
                                autoComplete="postal-code"
                                className="mt-1 pt-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="rounded-2xl items-center justify-evenly flex px-20 py-3 bg-white text-right sm:px-6">
                          <button
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                            type="submit"
                            className=" py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Annuler
                          </button>
                          <div className=" px-4 py-3 bg-white text-right sm:px-6 items-center justify-center">
                            <button
                              onClick={handleClick}
                              type="submit"
                              className="py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-[#d1411e] hover:opacity-60  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Commander
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>      
      </Dialog>
    </Transition.Root>
  );
};
export default Modals;
