import React from "react";

const Cards = () => {
	return (
		<div className="w-full h-screen flex items-center gap-5 p-34">
			<div className="cardContainer w-1/2 h-[50vh]">
				<div className="leftCard relative size-full rounded-xl bg-[#004D43] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
						alt=""
					/>
					<button className="absolute text-[#CDEA68] bottom-5 left-10 border-[1px] rounded-2xl px-2 py-1 tracking-tighter">
						{" "}
						&copy; 2019-2022{" "}
					</button>
				</div>
			</div>

			<div className="cardContainer w-1/2 h-[50vh] flex gap-5">
				<div className="rightCard1 relative size-full rounded-xl bg-[#212121] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
						alt=""
					/>
					<button className="absolute text-white bottom-5 border-[1px] rounded-2xl px-2 py-1 text-sm tracking-tighter uppercase">
						Rating 5.0 on clutch
					</button>
				</div>
				<div className="rightCard1 relative size-full rounded-xl bg-[#212121] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
						alt=""
					/>
					<button className="absolute text-white text-sm bottom-5 border-[1px] rounded-2xl px-2 py-1 tracking-tighter uppercase">
						business bootcamp alumni
					</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
