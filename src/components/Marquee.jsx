import React from "react";
import { motion } from "motion/react";

const Marquee = () => {
	return (
		<div>
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed=".1"
				className="w-full py-10 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]">
				<div className="text flex whitespace-nowrap overflow-hidden border-t-2 border-b-2 border-zinc-300 text-white">
					<motion.h1
						initial={{ x: "0" }}
						animate={{ x: "-100%" }}
						transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
						className='py-12 text-[17vw] leading-none uppercase font-["Founders_Grotesk"] font-semibold -mb-[6.57vw] pr-20'>
						we are ochi
					</motion.h1>
					<motion.h1
						initial={{ x: "0" }}
						animate={{ x: "-100%" }}
						transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
						className='py-12 text-[17vw] leading-none uppercase font-["Founders_Grotesk"] font-semibold -mb-[6.57vw] pr-20'>
						we are ochi
					</motion.h1>
				</div>
			</div>
		</div>
	);
};

export default Marquee;
