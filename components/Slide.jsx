import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Slide() {
  const images = [
    
      "https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Ffeatured.png?alt=media&token=ef3ae9ec-b273-453f-a816-27f1a60121a5",
    
    
      "https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Ffeatured2.png?alt=media&token=7922a804-8baa-4e01-8fba-062d0c721fed",
    
    
     "https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2Ffeatured3.png?alt=media&token=97d05583-9b73-424c-b607-325c26cb403d",
    
  ];
  	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 2500,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "20px", marginRight: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "20px", marginLeft: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};
	return (
		<div className="bg-[#d1411e]">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex  justify-center h-[300px] sm:h-[400px] lg:h[500px] xl:h-[600px] 2xl:h-[700px] 2xl:w-[1800px]">
						<img
							className="object-contain overflow-hidden rounded-lg "
							src={each}
              alt="banner"
						/>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slide;