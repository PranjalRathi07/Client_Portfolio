/** @format */

import React, { useRef, useState, useEffect } from "react";

const WhyMe = () => {
	const phoneRef = useRef(null);
	const [rotation, setRotation] = useState({ x: 15, y: -35 });

	// Scroll Event Listener for 3D tilt
	useEffect(() => {
		const handleScroll = () => {
			if (!phoneRef.current) return;

			const rect = phoneRef.current.getBoundingClientRect();
			const viewportHeight = window.innerHeight;

			let progress =
				(viewportHeight - rect.top) / (viewportHeight + rect.height);
			progress = Math.max(0, Math.min(1, progress));

			// Calculates dynamic angles:
			// Enters the screen sharply angled (like your screenshot),
			// and smoothly straightens out as you scroll down.
			const rotateY = -40 + progress * 40;
			const rotateX = 15 - progress * 15;

			setRotation({ x: rotateX, y: rotateY });
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section
			id='why-me'
			className='relative w-full bg-[#050507] py-24 px-6 md:px-12 flex justify-center font-sans overflow-hidden'>
			{/* Faint Tech Grid Background */}
			<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none z-0'></div>

			<div className='w-full max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 relative z-10'>
				{/* LEFT COLUMN: Text & Accordions */}
				<div className='w-full lg:w-1/2 flex flex-col'>
					{/* Heading (Matched exact colors from screenshot) */}
					<h2 className='text-[11vw] sm:text-6xl lg:text-[5rem] font-black tracking-tight uppercase leading-[0.9] mb-6'>
						<span className='text-white'>THE</span>{" "}
						<span className='text-[#3b82f6]'>RETENTION</span> <br />
						<span className='text-white'>ARCHITECTURE.</span>
					</h2>

					{/* Subtitle */}
					<p className='text-[#9ca3af] text-[15px] md:text-[17px] leading-relaxed font-light max-w-[90%] mb-12'>
						The algorithm isn't magic. It's math. It prioritizes{" "}
						<span className='text-white font-bold'>
							Average View Duration (AVD)
						</span>{" "}
						above all else. My editing style is built to minimize drop-offs.
					</p>

					{/* Strategy Cards List */}
					<div className='flex flex-col gap-4'>
						{/* Card 1 */}
						<div className='bg-white/3 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:bg-white/5 backdrop-blur-sm'>
							<div className='mt-0.5 shrink-0'>
								<svg
									className='w-6 h-6 text-[#3b82f6]'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<circle cx='12' cy='12' r='9' strokeWidth='2'></circle>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 12l2 2 4-4'></path>
								</svg>
							</div>
							<div>
								<h3 className='text-white font-bold text-[16px] mb-1'>
									Pattern Interrupts
								</h3>
								<p className='text-[#6b7280] text-[13px] font-light'>
									Resetting attention every 3-5 seconds.
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className='bg-white/3 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:bg-white/5 backdrop-blur-sm'>
							<div className='mt-0.5 shrink-0'>
								<svg
									className='w-6 h-6 text-[#3b82f6]'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<circle cx='12' cy='12' r='9' strokeWidth='2'></circle>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 12l2 2 4-4'></path>
								</svg>
							</div>
							<div>
								<h3 className='text-white font-bold text-[16px] mb-1'>
									Soundscapes
								</h3>
								<p className='text-[#6b7280] text-[13px] font-light'>
									Multi-layered audio that drives emotion.
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className='bg-white/3 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:bg-white/5 backdrop-blur-sm'>
							<div className='mt-0.5 shrink-0'>
								<svg
									className='w-6 h-6 text-[#3b82f6]'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<circle cx='12' cy='12' r='9' strokeWidth='2'></circle>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M9 12l2 2 4-4'></path>
								</svg>
							</div>
							<div>
								<h3 className='text-white font-bold text-[16px] mb-1'>
									Visual Density
								</h3>
								<p className='text-[#6b7280] text-[13px] font-light'>
									Information rich visuals that reward focus.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* RIGHT COLUMN: 3D Phone Mockup */}
				<div className='w-full lg:w-1/2 flex justify-center lg:justify-end relative perspective-[2000px]'>
					{/* The 3D Object Container */}
					<div
						ref={phoneRef}
						style={{
							transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
							transformStyle: "preserve-3d", // Crucial for rendering the physical thickness
							transition: "transform 0.1s ease-out",
						}}
						className='relative w-[300px] sm:w-[320px] h-[640px] z-10 drop-shadow-2xl'>
						{/* THE 3D BEZEL TRICK:
						  We render 12 pure dark-gray divs and stack them backward in 3D space.
						  This creates a solid, curved, 24px thick physical edge that looks identical to a 3D render.
						*/}
						{[...Array(12)].map((_, i) => (
							<div
								key={i}
								style={{ transform: `translateZ(${-i * 2}px)` }}
								className='absolute inset-0 bg-[#212124] border border-[#333336] rounded-[3rem]'></div>
						))}

						{/* Front Screen Content */}
						<div
							style={{ transform: "translateZ(1px)" }}
							className='absolute inset-0 bg-[#070709] border-8 border-[#18181b] rounded-[3rem] overflow-hidden flex flex-col'>
							{/* Phone Status Bar */}
							<div className='flex justify-between items-center px-6 pt-4 pb-2 bg-[#070709] relative z-20'>
								<span className='text-white text-[11px] font-bold tracking-wider'>
									10:00
								</span>
								<div className='flex items-center gap-1.5'>
									<svg
										className='w-3.5 h-3.5 text-white'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M12 21L15.6 16.2C14.6 15.4 13.4 15 12 15C10.6 15 9.4 15.4 8.4 16.2L12 21ZM12 3C7.9 3 4.2 4.5 1.2 6.9L3 9.3C5.5 7.4 8.6 6.3 12 6.3C15.4 6.3 18.5 7.4 21 9.3L22.8 6.9C19.8 4.5 16.1 3 12 3Z' />
									</svg>
									<svg
										className='w-4 h-4 text-white'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M17 4h-3V2h-4v2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z' />
									</svg>
								</div>
							</div>

							{/* Phone Apps Content */}
							<div className='p-5 flex-1 flex flex-col relative z-10'>
								<h4 className='text-white font-extrabold text-xl mb-4'>
									Overview
								</h4>

								{/* Main Chart Card */}
								<div className='bg-white/4 border border-white/5 rounded-[1.5rem] p-5 pb-0 overflow-hidden relative shadow-lg'>
									<div className='flex justify-between items-start mb-6'>
										<div>
											<p className='text-[#6b7280] text-[11px] font-medium mb-1'>
												Retention Rate
											</p>
											<h5 className='text-white text-4xl font-bold tracking-tight'>
												84.2%
											</h5>
										</div>
										<div className='flex items-center gap-1 bg-[#10b981]/10 border border-[#10b981]/20 px-2.5 py-1 rounded-full'>
											<svg
												className='w-3 h-3 text-[#10b981]'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='3'
													d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'></path>
											</svg>
											<span className='text-[#10b981] text-[10px] font-bold'>
												+12%
											</span>
										</div>
									</div>

									{/* Custom SVG Line Chart */}
									<div className='w-full h-[120px] relative -mx-5 mt-4'>
										<svg
											className='w-full h-full'
											viewBox='0 0 300 120'
											preserveAspectRatio='none'>
											<defs>
												<linearGradient
													id='chartGradient'
													x1='0'
													y1='0'
													x2='0'
													y2='1'>
													<stop
														offset='0%'
														stopColor='#3b82f6'
														stopOpacity='0.4'
													/>
													<stop
														offset='100%'
														stopColor='#3b82f6'
														stopOpacity='0'
													/>
												</linearGradient>
											</defs>
											<path
												d='M 0 90 C 100 90, 150 40, 280 30 L 280 120 L 0 120 Z'
												fill='url(#chartGradient)'
											/>
											<path
												d='M 0 90 C 100 90, 150 40, 280 30'
												fill='none'
												stroke='#3b82f6'
												strokeWidth='4'
												strokeLinecap='round'
											/>
											<circle
												cx='280'
												cy='30'
												r='5'
												fill='#ffffff'
												className='drop-shadow-[0_0_8px_rgba(255,255,255,1)]'
											/>
											<circle
												cx='280'
												cy='30'
												r='10'
												fill='#ffffff'
												opacity='0.2'
											/>
										</svg>
									</div>
								</div>

								{/* Bottom Stat Cards */}
								<div className='grid grid-cols-2 gap-4 mt-4'>
									<div className='bg-white/4 border border-white/5 rounded-2xl p-5 flex flex-col justify-center'>
										<span className='text-white text-2xl font-bold mb-1'>
											45.2K
										</span>
										<span className='text-[#6b7280] text-[9px] font-black uppercase tracking-widest'>
											NEW SUBS
										</span>
									</div>
									<div className='bg-white/4 border border-white/5 rounded-2xl p-5 flex flex-col justify-center'>
										<span className='text-white text-2xl font-bold mb-1'>
											98%
										</span>
										<span className='text-[#6b7280] text-[9px] font-black uppercase tracking-widest'>
											SENTIMENT
										</span>
									</div>
								</div>
							</div>

							{/* Bottom Home Indicator Line */}
							<div className='absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/30 rounded-full z-20'></div>
						</div>
					</div>

					{/* Faint blue background glow behind the phone */}
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none z-0'></div>
				</div>
			</div>
		</section>
	);
};

export default WhyMe;
