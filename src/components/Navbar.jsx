/** @format */

import React, { useState, useEffect } from "react";
import Navigationbar from "./Navigationbar";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Handle scroll effect for the glassmorphism background
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent scrolling when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isMobileMenuOpen]);

	const navLinks = ["WORK", "ABOUT", "WHY ME", "SERVICES", "CONTACT"];

	// Smooth scroll handler
	const handleNavClick = (e, link) => {
		e.preventDefault();
		let id = link.toLowerCase().replace(" ", "-");
		if (id === "work") {
			id = "services";
		}
		if (id === "about") {
			id = "about";
		}
		if (id === "why-me") {
			id = "why-me";
		}
		if (id === "services") {
			id = "services";
		}
		if (id === "contact") {
			id = "contact";
		}
		const target = document.getElementById(id);
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			{/* Main Navbar 
        Uses fixed positioning and toggles background/padding based on scroll state 
      */}
			<nav
				className={`fixed top-0 left-0 w-full z-50 flex justify-between items-start md:items-center px-6 md:px-10 transition-all duration-300 font-sans ${
					isScrolled
						? "py-4 bg-[#070709]/80 backdrop-blur-md border-b border-white/5 shadow-lg"
						: "py-8 bg-transparent"
				}`}>
				{/* Left: Logo */}
				<a
					href='#'
					className='relative z-50 text-xl md:text-2xl font-black text-white tracking-widest uppercase flex items-baseline'>
					TAPISH{" "}
					<span className='text-blue-500 ml-1 text-3xl leading-none'>.</span>
				</a>

				{/* Center: Navigation Group (Desktop Only)
          Positioned absolute to ensure perfect centering regardless of left/right element widths 
        */}
				<div className='hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
					{/* Main Navigation Pill */}
					<ul className='flex items-center gap-8 bg-white/2 border border-white/10 px-8 py-3 rounded-full backdrop-blur-sm relative z-10'>
						{navLinks.map((link) => (
							<li key={link}>
								<a
									href={`#${link.toLowerCase().replace(" ", "-")}`}
									onClick={(e) => handleNavClick(e, link)}
									className='text-[11px] font-semibold text-gray-400 hover:text-white uppercase tracking-[0.15em] transition-colors duration-300'>
									{link}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Right: CTA Button (Desktop Only) */}
				<a
					href='#contact'
					className='relative z-50 hidden md:inline-block bg-[#2563eb] text-white text-[11px] font-bold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-[0_0_24px_rgba(37,99,235,0.5)] hover:shadow-[0_0_32px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 transition-all duration-300'>
					START PROJECT
				</a>

				{/* Mobile Hamburger Toggle */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className='relative z-50 md:hidden text-white p-1 focus:outline-none'
					aria-label='Toggle Menu'>
					<svg
						className='w-7 h-7'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'>
						{isMobileMenuOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'
							/>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						)}
					</svg>
				</button>
			</nav>

			{/* Mobile Menu Overlay 
        Slides down from the top when the hamburger is clicked 
      */}
			<div
				className={`fixed inset-0 bg-[#070709] text-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
					isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
				}`}>
				<Navigationbar
					onNavItemClick={(name) =>
						handleNavClick({ preventDefault: () => {} }, name)
					}
				/>
			</div>
		</>
	);
};

export default Navbar;
