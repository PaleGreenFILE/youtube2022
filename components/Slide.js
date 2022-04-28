import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

function Slide() {
  const images = [
    
      "https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2FViolet%2C%20Orange%2C%20Blue%20%20and%20Pink%20Crypto%20Trading%20Bot%20Abstract%20Concept%20Facebook%20Post%20(634%C2%A0%C3%97%C2%A0314%C2%A0px)%20(1920%C2%A0%C3%97%C2%A01080%C2%A0px)%20(1).png?alt=media&token=f48d0064-db85-43f4-b0e6-7a3028469ebf",
    
    
      "https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2FViolet%2C%20Orange%2C%20Blue%20%20and%20Pink%20Crypto%20Trading%20Bot%20Abstract%20Concept%20Facebook%20Post%20(634%C2%A0%C3%97%C2%A0314%C2%A0px)%20(1920%C2%A0%C3%97%C2%A01080%C2%A0px)%20(2).png?alt=media&token=e85f4b58-917c-46bf-8ba9-9b0526371563",
    
    
     "https://firebasestorage.googleapis.com/v0/b/daniella-pizza.appspot.com/o/utils%2FViolet%2C%20Orange%2C%20Blue%20%20and%20Pink%20Crypto%20Trading%20Bot%20Abstract%20Concept%20Facebook%20Post%20(634%C2%A0%C3%97%C2%A0314%C2%A0px)%20(1920%C2%A0%C3%97%C2%A01080%C2%A0px).png?alt=media&token=84e6360d-a993-46f0-ad5d-218de9337682",
    
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
					<div key={index} className=" sm:h-[50vh] h-[calc(100vh-100px)] overflow-hidden w-[300vw] flex">
						<Image
							className="w-[100vw] h-[100%] flex relative overflow-hidden rounded-lg "
							src={each}							
							objectFit="contain"
							alt="banner"
							layout="fill"
						/>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slide;