import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const LandingPage = () => {
	return (
		<div className="w-full h-screen pt-1">
			<div className="leftText mt-37 px-20">
				{["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
					return (
						<div className="masker">
							<div className="w-fit flex">
								{index === 1 && (
									<div className="w-[7.7vw] h-[5vw] bg-red-500 relative -top-[0.4vw] mr-[1vw] rounded-md"></div>
								)}
								<h1
									className="uppercase tracking-tight leading-[6.57vw] 
								text-[6.5vw] font-['Founders_Grotesk'] font-bold">
									{item}
								</h1>
							</div>
						</div>
					);
				})}
			</div>
			<div className="border-t-[1px] mt-18 border-zinc-700 flex justify-between items-center py-5 px-20 font-['Neue_Montereal']">
				{["For public to private companies", "From the first pitch to IPO"].map(
					(item, index) => (
						<p className="text-md font-light tracking-tight leading-none">
							{item}
						</p>
					)
				)}
				<div className="startButton flex items-center gap-3">
					<div className="px-5 py-2 text-sm font-light uppercase border-[1px] rounded-full border-zinc-500">
						Start the project
					</div>
					<div className="size-9 border-[1px] rounded-full border-zinc-500 flex justify-center items-center">
						<span className="rotate-[45deg]">
							<FaArrowUp />
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
