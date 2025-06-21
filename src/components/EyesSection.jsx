import React, { useEffect, useState } from "react";

const EyesSection = () => {
	const [rotate, setRotate] = useState(0);

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseXloc = e.clientX;
			let mouseYloc = e.clientY;

			//! TO FIND THE DISTANCE BETWEEN THE MOUSE AND THE CENTER (delta = distance)
			let deltaX = mouseXloc - window.innerWidth / 2;
			let deltaY = mouseYloc - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 180);
		});
	});

	return (
		<div className="eyes w-full h-screen overflow-hidden">
			<div
				data-scroll
				data-scroll-speed="-.9"
				className="relative img size-full bg-end bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]">
				<div className="absolute mt-[5vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] size-2/4 flex justify-center gap-10">
					<div className="outerWhite flex justify-center items-center size-[15vw] rounded-full bg-zinc-100">
						<div className="relative blackLayer flex items-center justify-center size-[10vw] bg-zinc-900 rounded-full">
							<div
								style={{
									transform: `rotate(${rotate}deg)`,
								}}
								className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6">
								<div className="innerWhite size-[1.5vw] bg-zinc-100 rounded-full ml-[0.35vw]"></div>
							</div>
						</div>
					</div>
					<div className="outerWhite flex justify-center items-center size-[15vw] rounded-full bg-zinc-100">
						<div className="relative blackLayer flex items-center justify-center size-[10vw] bg-zinc-900 rounded-full">
							<div
								style={{
									transform: `rotate(${rotate}deg)`,
								}}
								className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6">
								<div className="innerWhite size-[1.5vw] bg-zinc-100 rounded-full ml-[0.35vw]"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EyesSection;
