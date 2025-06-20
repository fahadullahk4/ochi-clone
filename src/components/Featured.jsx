import React from "react";

const Featured = () => {
	return (
		<div className="w-full py-20 font-['Neue_Montereal']">
			<div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
				<h1 className="text-[4vw] leading-[4.1vw] tracking-tight">
					Featured projects
				</h1>
			</div>
			<div className="px-20">
				<div className="cards w-full flex gap-10 mt-10">
					<div className="cardContainer relative w-1/2 h-[80vh]">
						<div className="card size-full rounded-xl overflow-hidden">
							<h1 className="absolute uppercase text-[5vw] font-['Founders_Grotesk'] font-semibold top-1/2 left-full -translate-x-[50%] -translate-y-[50%] whitespace-nowrap text-[#CDEA68] z-[9]">
								{"SALIENCE LABS".split(" ").map((item, index) => (
									<span>{item}</span>
								))}
							</h1>
							<img
								className="size-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
								alt=""
							/>
						</div>
					</div>
					<div className="cardContainer w-1/2 h-[80vh] relative">
						<div className="card size-full rounded-xl overflow-hidden">
							<h1 className="absolute uppercase text-[5vw] font-['Founders_Grotesk'] font-semibold top-1/2 right-full translate-x-[50%] -translate-y-[50%] whitespace-nowrap text-[#CDEA68] z-[9]">
								{"CARDBOARD SPACESHIP".split(" ").map((item, index) => (
									<span>{item}</span>
								))}
							</h1>
							<img
								className="size-full bg-cover"
								src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="button flex justify-center mt-[2vw]">
					<button className="px-6 py-3.5 mt-5 bg-zinc-900 text-white text-[1vw] rounded-3xl uppercase flex gap-7 items-center">
						view all case studies
						<div className="size-[0.5vw] bg-white rounded-full"></div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
