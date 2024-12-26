"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./modetoggle";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	// Smooth Scroll Handler
	const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>,targetId: string) => {
		e.preventDefault(); // Prevuent default anchor behavior
		const targetElement = document.getElementById(targetId); 
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" }); 
			setIsOpen(false); 
		}
	};

	return (
		<nav className="bg-white dark:bg-black border-b sticky top-0 backdrop-blur z-30">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<Link href="/">
						<Image
							src="/logo.png"
							alt="portfolio logo"
							width={100}
							height={40}
							className="h-10 w-auto sm:h-7 invert dark:invert-0"
							
						/>
					</Link>

					{/* Mobile Menu Button */}
					<div className="flex lg:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
							aria-label="toggle menu">
							{!isOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 8h16M4 16h16"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Navigation Links */}
				<div
					className={`absolute inset-x-0 z-20 bg-white dark:bg-black w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
						isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
					}`}>
					<div className="flex flex-col md:flex-row md:mx-6 font-semibold">
						<a
							href="#home"
							onClick={(e) => handleScroll(e, "home")}
							className="my-2 text-violet-700 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-600 md:mx-4 md:my-0">
							Home
						</a>
						<a
							href="#about"
							onClick={(e) => handleScroll(e, "about")}
							className="my-2 text-violet-700 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-600 md:mx-4 md:my-0">
							About
						</a>
						<a
							href="#portfolio"
							onClick={(e) => handleScroll(e, "portfolio")}
							className="my-2 text-violet-700 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-600 md:mx-4 md:my-0">
							Portfolio
						</a>
						<a
							href="#contact"
							onClick={(e) => handleScroll(e, "contact")}
							className="my-2 text-violet-700 dark:text-violet-300 hover:text-violet-500 dark:hover:text-violet-600 md:mx-4 md:my-0">
							Contact
						</a>
					</div>
					<div className="flex justify-center md:block">
						<ModeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
