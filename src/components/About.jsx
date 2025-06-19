import React from "react";

const About = () => {
	return (
		<div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montereal"]'>
			<h1 className="text-[3.9vw] leading-[4.1vw] tracking-tight">
				Ochi is a strategic presentation agency for forward-thinking businesses
				that need to raise funds, sell products, explain complex ideas, and hire
				great people.
			</h1>
			<div className="w-full border-t-[1px] border-[#aab972] mt-20 py-5 flex gap-5">
				<div className="w-1/2">
					<h1 className="text-[3.9vw]">Our approach:</h1>
					<button className="px-6 py-3.5 mt-5 bg-zinc-900 text-white text-[1vw] rounded-3xl uppercase flex gap-7 items-center">
						Read more <div className="size-[0.5vw] bg-white rounded-full"></div>
					</button>
				</div>
				<div className="w-1/2 h-[70vh] bg-[#859b36] rounded-2xl"></div>
			</div>
		</div>
	);
};

export default About;
