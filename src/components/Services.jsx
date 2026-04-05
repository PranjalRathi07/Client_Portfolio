/** @format */

import React, { useState } from "react";
import apple_ui from "../assets/apple_ui.mp4";
import comp from "../assets/comp_1.mp4";
import talking from "../assets/talking.mp4";
import documentary from "../assets/documentary_theam.jpg";
import motion_graphic from "../assets/SHOWREEL 2025.jpg";
import tkh from "../assets/tkh.png";

const Services = () => {
	// State to handle the pop-out video modal
	const [activeVideo, setActiveVideo] = useState(null);

	// Data array for your projects
	const projects = [
		{
			id: "01",
			category: "DOCUMENTARY STYLE",
			title: "PROJECT SHOWCASE",
			image: documentary,
			video: comp,
		},
		{
			id: "02",
			category: "MOTION UI",
			title: "PROJECT SHOWCASE",
			image: motion_graphic,
			video: apple_ui,
		},
		{
			id: "03",
			category: "TALKING HEAD",
			title: "PROJECT SHOWCASE",
			image: tkh,
			video: talking,
		},
	];

	// Function to close the modal when clicking outside the video
	const handleCloseModal = (e) => {
		if (e.target.id === "modal-overlay" || e.target.id === "close-btn") {
			setActiveVideo(null);
		}
	};

	return (
		<>
			{/* Main Section Wrapper */}
			<section
				id='services'
				className='relative w-full flex flex-col bg-transparent overflow-hidden pt-20 font-sans selection:text-white'>
				{/* Subtle Background Glow & Grid/Noise effect (simulated) */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[400px]  blur-[100px] rounded-[100%] pointer-events-none'></div>

				{/* Content Container */}
				<div className='px-6 md:px-12 lg:px-24 w-full relative z-10'>
					{/* --- HEADER SECTION --- */}
					<div className='flex flex-col md:flex-row md:justify-between items-start md:items-end mb-16 md:mb-24'>
						<div className='flex flex-col leading-[0.85]'>
							<h2 className='text-white text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter'>
								SELECTED
							</h2>
							<h2 className='text-[#222222] text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter'>
								WORKS.
							</h2>
						</div>

						<div className='mt-8 md:mt-0 text-[#888888] text-sm md:text-base max-w-[280px] md:text-right font-medium leading-relaxed'>
							A curation of high-performing assets created for clients globally.
							<br />
							Click to watch.
						</div>
					</div>

					{/* --- GRID SECTION --- */}
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pb-24'>
						{projects.map((project) => (
							<div
								key={project.id}
								onClick={() => setActiveVideo(project.video)}
								className='group cursor-pointer flex flex-col w-full relative overflow-hidden rounded-[20px] aspect-4/3 bg-[#111111]'>
								{/* Bottom Gradient for Text Readability */}
								<div className='absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-trom-black/90 via-black/40 to-transparent z-10'></div>

								{/* Play Icon overlay */}
								<div className='absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none'>
									<div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(79,139,255,0.3)]'>
										<svg
											className='w-8 h-8 text-white ml-1'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M8 5v14l11-7z' />
										</svg>
									</div>
								</div>

								{/* Thumbnail Image */}
								<img
									src={project.image}
									alt={project.title}
									className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0'
									loading='lazy'
								/>

								{/* Tags and Title (On Image) */}
								<div className='absolute bottom-6 left-6 right-6 z-30 flex flex-col items-start transition-transform duration-500 ease-out group-hover:-translate-y-3'>
									<div className='bg-white text-black text-[10px] md:text-xs font-black px-3 py-1.5 uppercase w-max mb-2 tracking-widest'>
										{project.category}
									</div>
									<h3 className='text-white text-2xl md:text-2xl font-black italic uppercase tracking-wide drop-shadow-lg text-left'>
										{project.title}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* --- PREMIUM BOTTOM BORDER DIVIDER --- */}
				{/* This creates the exact subtle line shown in the screenshot separating the sections */}
				<div className='w-full h-1.5 bg-linear-to-r from-transparent via-[#4F8BFF] to-transparent'></div>
			</section>

			{/* --- VIDEO MODAL POP-UP --- */}
			{activeVideo && (
				<div
					id='modal-overlay'
					onClick={handleCloseModal}
					className='fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4 sm:p-10 backdrop-blur-sm'>
					{/* Close Button */}
					<button
						id='close-btn'
						onClick={() => setActiveVideo(null)}
						className='absolute top-6 right-6 md:top-10 md:right-10 text-white text-4xl hover:text-[#4F8BFF] transition-colors z-101'>
						&times;
					</button>

					{/* Video Player */}
					<div className='relative w-full max-w-[1200px] aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10'>
						<video
							src={activeVideo}
							controls
							autoPlay
							className='w-full h-full object-contain'>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			)}
		</>
	);
};

export default Services;
