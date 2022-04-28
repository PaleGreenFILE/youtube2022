import  Script  from 'next/script';

function Recaptcha() {
  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}></Script>
    </>
  );
}

export default Recaptcha;
