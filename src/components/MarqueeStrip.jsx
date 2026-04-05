/** @format */

import React from "react";

const MarqueeStrip = () => {
	// The exact sequence of words from the site
	const words = [
		"EDITING",
		"MOTION",
		"SOUND",
		"STORY",
		"COLOR",
		"GRAPHICS",
		"KEYFRAMES",
	];

	return (
		<section className='relative w-full h-[200px] sm:h-[250px] bg-transparent overflow-hidden flex items-center justify-center z-20'>
			{/* The Rotated Container
        w-[110%] ensures it stretches past the screen edges so corners don't clip when rotated.
        -rotate-2 matches the slight upward tilt from left to right.
      */}
			<div className='absolute w-[110%] bg-[#3b82f6] py-4 sm:py-5 -rotate-2 flex shadow-[0_0_50px_rgba(59,130,246,0.3)]'>
				{/* The Scrolling Track */}
				<div className='flex whitespace-nowrap animate-marquee'>
					{/* We render the sequence multiple times to create a seamless infinite loop.
            Depending on screen width, 4 sets guarantees it will never run out of track.
          */}
					{[...Array(4)].map((_, setIndex) => (
						<div key={setIndex} className='flex items-center'>
							{words.map((word, wordIndex) => (
								<React.Fragment key={`${setIndex}-${wordIndex}`}>
									<span className='text-white text-5xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tight px-6 md:px-8'>
										{word}
									</span>
									<span className='text-white text-3xl sm:text-4xl md:text-5xl px-2'>
										★
									</span>
								</React.Fragment>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MarqueeStrip;
