function Footer() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-40 px-20 py-14  bg-gray-100 text-gray-600">
          <div className=" space-y-4 cursor-pointer text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Coza Booking works</p>
            <p>NewsRoom</p>
            <p>Investors</p>
            <p>Booking Plus</p>
            <p>Booking Luxe</p>
          </div>

          <div className="space-y-4  cursor-pointer text-xs text-gray-800">
            <h5 className="font-bold ">COMMUNITY</h5>
            <p>Accessibility</p>
            <p>Login</p>
            <p>Register</p>
            <p>Privacy Policy</p>
            <p>Legal</p>
          </div>

          <div className="space-y-4 cursor-pointer text-xs text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p>Booking Now</p>
            <p>Menu</p>
            <p>Hotels</p>
            <p>Room</p>
            <>Services</>
          </div>

          <div className="space-y-4 cursor-pointer text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Privacy Policy</p>
            <p>Legal</p>
            <p>Contact</p>
          </div>
        </div>
      </section>

      <div className=" bg-gray-100 text-gray-800 ">
        <p className=" text-xs justify-center text-center py-15  items-center">
          <i>Coza-Booking.com Tous Droit Réserver. Copyright © 2023</i>
        </p>
      </div>
    </div>
  );
}

export default Footer;
