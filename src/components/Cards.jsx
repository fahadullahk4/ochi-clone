import React from 'react'

const Cards = () => {
  return (
		<div className="w-full h-screen p-34">
			<div className="cardContainer w-1/2 h-[50vh]">
				<div className="leftCard size-full rounded-xl bg-[#004D43] relative flex items-center justify-center">
					<img className='w-32'
						src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
						alt=""
					/>
                    <button></button>
				</div>
				<div className="rightCards"></div>
			</div>
		</div>
	);
}

export default Cards
