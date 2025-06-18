import React from "react";

const Marquee = () => {
	return (
		<div>
			<div className="w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]">
				<div className="text flex gap-10 whitespace-nowrap overflow-hidden border-t-2 border-b-2">
					<h1 className='py-12 text-[17vw] leading-none uppercase font-["Founders_Grotesk"] font-semibold -mb-[6.57vw]'>
						we are ochi
					</h1>
					<h1 className='py-12 text-[17vw] leading-none uppercase font-["Founders_Grotesk"] font-semibold -mb-[6.57vw]'>
						we are ochi
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Marquee;
