/** @format */

import React from "react";

const Hero = () => {
	return (
		<section className='relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden px-6 pt-20 font-sans'>
			{/* Subtle Background Glow & Grid/Noise effect (simulated) */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px] blur-[100px] rounded-[100%] pointer-events-none'></div>

			{/* Main Typography Header */}
			<div className='relative flex flex-col items-center justify-center z-10 select-none'>
				<div className='flex flex-row items-center gap-4 sm:gap-6 md:gap-8'>
					{/* Left: "MOTION" Text */}
					<h1 className='text-[12vw] sm:text-[80px] md:text-[120px] lg:text-[150px] font-black leading-[0.8] tracking-tighter uppercase relative z-10 bg-linear-to-r from-gray-600 via-white to-gray-600 bg-size-[200%_auto] text-transparent bg-clip-text animate-gradientText'>
						MOTION
					</h1>

					{/* Right: "CRAFT" Text */}
					<div className='relative'>
						<h1 className='text-[12vw] sm:text-[80px] md:text-[120px] lg:text-[150px] font-black leading-[0.8] tracking-tighter uppercase relative z-10 bg-linear-to-r from-[#5c98ff] via-gray-400 to-[#5c98ff] bg-size-[200%_auto] text-transparent bg-clip-text animate-gradientText'>
							CRAFT
						</h1>

						{/* Sparkle Icon */}
						<svg
							className='absolute -top-4 -right-8 md:-top-6 md:-right-14 w-8 h-8 md:w-12 md:h-12 text-[#94bbf9] opacity-80'
							viewBox='0 0 24 24'
							fill='currentColor'>
							<path d='M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z' />
							<path
								d='M19.5 16L20 18.5L22.5 19L20 19.5L19.5 22L19 19.5L16.5 19L19 18.5L19.5 16Z'
								opacity='0.7'
							/>
						</svg>
					</div>
				</div>
			</div>

			{/* Subtitle Description */}
			<p className='mt-10 md:mt-14 text-[#9ca3af] text-base md:text-[19px] max-w-[800px] text-center font-light leading-relaxed tracking-wide z-10 relative'>
				Built for attention. Engineered for{" "}
				<span className='text-white font-bold underline decoration-white/40 underline-offset-[6px]'>
					retention
				</span>{" "}
				designed to dominate <br className='hidden md:block' /> the algorithm.
			</p>

			{/* Stats Row */}
			<div className='mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-[13px] md:text-[14px] text-[#9ca3af] z-10 relative'>
				{/* Stat 1: Projects */}
				<div className='flex items-center gap-2.5'>
					<svg
						className='w-4 h-4 text-[#3b82f6]'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m4-2v4m0 0l-2-2m2 2l2-2'
						/>
					</svg>
					<span className='font-bold text-white'>25+</span> Projects
				</div>

				{/* Divider */}
				<div className='hidden md:block w-px h-4 bg-white/10'></div>

				{/* Stat 2: Views */}
				<div className='flex items-center gap-2.5'>
					<svg
						className='w-4 h-4 text-[#3b82f6]'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
						/>
					</svg>
					<span className='font-bold text-white'>10M+</span> Views Generated
				</div>

				{/* Divider */}
				<div className='hidden md:block w-px h-4 bg-white/10'></div>

				{/* Stat 3: Satisfaction */}
				<div className='flex items-center gap-2.5'>
					<svg
						className='w-4 h-4 text-[#3b82f6]'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
						/>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
						/>
					</svg>
					<span className='font-bold text-white'>100%</span> Client Satisfaction
				</div>
			</div>

			{/* Action Buttons Row */}
			<div className='mt-14 flex flex-col sm:flex-row items-center gap-6 z-10 relative'>
				{/* Start Project Button */}
				<a
					href='#contact'
					className='group flex items-center justify-center gap-3 bg-[#2563eb] text-white text-[12px] font-extrabold uppercase tracking-widest px-8 py-4 rounded-full shadow-[0_0_32px_rgba(37,99,235,0.4)] hover:shadow-[0_0_48px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto'>
					START PROJECT
					<svg
						className='w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300'
						fill='none'
						stroke='currentColor'
						strokeWidth='2.5'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4 19L20 5m0 0v10m0-10H10'
						/>
					</svg>
				</a>

				{/* Watch Showreel Button */}
				<a href='#services'>
					<button className='group flex items-center justify-center gap-3 bg-transparent text-white border border-white/15 text-[12px] font-extrabold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/5 transition-all duration-300 w-full sm:w-auto'>
						<svg
							className='w-4 h-4 text-white'
							viewBox='0 0 24 24'
							fill='currentColor'>
							<path d='M5 3l14 9-14 9V3z' />
						</svg>
						WATCH SHOWREEL
					</button>
				</a>
			</div>
		</section>
	);
};

export default Hero;
