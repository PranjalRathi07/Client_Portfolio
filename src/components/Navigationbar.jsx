/** @format */

import { Component } from "@/components/animated-menu";

// --- Constants ---
const navigationItems = [
	{
		name: "Work",
		href: "/Services",
		description: "[0]",
	},
	{
		name: "About",
		href: "/About",
		description: "[1]",
	},
	{
		name: "Why Me",
		href: "/WhyMe",
		description: "[2]",
	},
	{
		name: "Services",
		href: "/Services",
		description: "[3]",
	},
];

export default function Navigationbar({ onNavItemClick }) {
	return (
		<ul className='bs flex min-h-full w-full flex-1 flex-col items-center justify-center gap-1.5 rounded-2xl px-7 py-3 backdrop-blur-sm'>
			{navigationItems.map((item, index) => (
				<li
					className='relative flex cursor-pointer flex-col items-center overflow-visible'
					onClick={() => onNavItemClick && onNavItemClick(item.name)}
					key={index}>
					<div className='relative flex items-start'>
						<Component
							center
							className='text-4xl font-extrabold uppercase leading-[0.8] tracking-[-0.03em] transition-colors lg:text-5xl'>
							{item.name}
						</Component>
					</div>
				</li>
			))}

			<li className='mt-8'>
				<a
					href='#contact'
					className='relative z-50 bg-[#2563eb] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-[0_0_24px_rgba(37,99,235,0.5)] hover:shadow-[0_0_32px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition-all duration-300 block'>
					START PROJECT
				</a>
			</li>
		</ul>
	);
}
