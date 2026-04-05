/** @format */

import React from "react";

const Contact = () => {
	return (
		<section
			id='contact'
			className='relative z-10 bg-black min-h-screen py-24 px-6 flex flex-col items-center justify-center font-sans selection:bg-[#4F8BFF] selection:text-white'>
			{/* --- HEADER --- */}
			<div className='text-center mb-8 flex flex-col items-center'>
				<h2 className='text-white text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter leading-none mb-6'>
					LET'S <span className='text-[#4F8BFF]'>WORK.</span>
				</h2>
				<p className='text-[#888888] text-base md:text-lg max-w-lg font-medium leading-relaxed'>
					Ready to elevate your content? Connect with me directly on WhatsApp
					for the fastest response.
				</p>
			</div>

			{/* --- WHATSAPP CARD --- */}
			<a
				href='https://wa.me/8273191223'
				target='_blank'
				rel='noopener noreferrer'
				className='group relative w-full max-w-[600px] bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 flex items-center justify-between transition-all duration-300 hover:scale-[1.02] hover:border-[#25D366]/30 shadow-[0_0_50px_rgba(37,211,102,0.05)] hover:shadow-[0_0_80px_rgba(37,211,102,0.15)]'>
				<div className='flex items-center gap-6'>
					{/* Green WhatsApp Circle */}
					<div className='w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shrink-0'>
						<svg
							className='w-8 h-8 text-white'
							fill='currentColor'
							viewBox='0 0 24 24'>
							<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' />
						</svg>
					</div>
					{/* Text Info */}
					<div className='flex flex-col'>
						<h3 className='text-white text-2xl md:text-3xl font-black tracking-tight mb-1'>
							WhatsApp Chat
						</h3>
						<p className='text-[#888888] text-sm md:text-base font-medium'>
							+91 8273191223
						</p>
					</div>
				</div>

				{/* Link Arrow Button */}
				<div className='w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#25D366]/60 group-hover:border-[#25D366]/60 group-hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] shrink-0'>
					<svg
						className='w-5 h-5 text-white transition-all duration-300 group-hover:rotate-45 group-hover:text-white'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						strokeWidth='2'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M7 17L17 7M17 7H7M17 7V17'
						/>
					</svg>
				</div>
			</a>

			{/* --- SOCIAL ICONS FOOTER --- */}
			<div className='flex gap-4 md:gap-6 mt-24 relative z-20'>
				{/* Instagram */}
				<a
					href='https://www.instagram.com/motioncraftstudios.in?utm_source=qr&igsh=bWNoa285ZXdvM3d4'
					target='_blank'
					rel='noopener noreferrer'
					className='group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#4F8BFF] hover:border-[#4F8BFF] transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(79,139,255,0.4)]'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						viewBox='0 0 24 24'>
						<rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
						<path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
						<line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
					</svg>
				</a>

				{/* Email */}
				<a
					href='mailto:motioncraftstudios.in@gmail.com'
					className='group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#4F8BFF] hover:border-[#4F8BFF] transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(79,139,255,0.4)]'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						viewBox='0 0 24 24'>
						<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
						<polyline points='22,6 12,13 2,6'></polyline>
					</svg>
				</a>

				{/* X / Twitter */}
				<a
					href='https://x.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#4F8BFF] hover:border-[#4F8BFF] transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(79,139,255,0.4)]'>
					<svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
					</svg>
				</a>

				{/* LinkedIn */}
				<a
					href='https://www.linkedin.com/in/motioncraft-studios-3b7021401?utm_source=share_via&utm_content=profile&utm_medium=member_android'
					target='_blank'
					rel='noopener noreferrer'
					className='group w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-[#4F8BFF] hover:border-[#4F8BFF] transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(79,139,255,0.4)]'>
					<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
						<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
					</svg>
				</a>
			</div>
		</section>
	);
};

export default Contact;
