"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Topper from "../../public/assets/EkenePic.jpeg";
import { motion } from "framer-motion";

const Page = () => {
	return (
		<div className="w-full pb-20 bg-[#dec8ae]  min-h-screen flex flex-col items-center text-[#1a1818]">
			<div className="md:h-screen h-[50px] md:w-[80px] bg-[#dec8ae]  w-full flex md:justify-end items-center justify-center sticky md:fixed top-0 md:left-0 z-10">
				<div className="md:h-[80%] w-[85%] flex md:flex-col items-center justify-between gap-8 md:gap-0 md:space-y-8">
					<div className="md:space-y-4 space-x-2 md:space-x-0 flex md:block flex-col items-center justify-center">
						<div className="tracking-[0.3em] text-[10px] font-medium md:-rotate-90 cursor-pointer hover:line-through transition-all duration-300">
							<Link href={"/"}>HOME</Link>
						</div>
					</div>
					<div className="md:h-[100px] h-[2px] rounded-md md:w-[1px] w-[70px] text-white bg-[#1a1818]" />
					<div className="md:flex-1 hidden md:flex" />
					<div className="tracking-[0.1em] text-[12px] font-medium md:-rotate-90">
						© / 2024
					</div>
				</div>
			</div>

			<div className="w-[85%] md:w-[70vw] mt-5 md:mt-[120px]">
				<div className="flex gap-10 justify-between">
					<div className="w-[50%]">
						<motion.h1
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 2 }}
							className="text-[11.8vw]  md:text-[10.5vw] font-grandslang leading-[1]"
						>
							Resume
						</motion.h1>

						<div className="absolute md:static bg-[#dec8ae]  left-0 pb-20 md:pb-0 flex flex-col items-center w-[100%]">
							<h5 className="font-grandslang text-[8vw] w-[85%] md:text-[2.5vw] font-light leading-[1.3] mt-10 md:w-[100%]">
								I&apos;m Ekene. A designer, creator and problem
								solver.
							</h5>

							<div className="text-[14px] font-light space-y-10 w-[85%] md:w-full mt-8">
								<h2 className="font-grandslang text-[24px]">
									EXPERIENCE
								</h2>
								<ul>
									<li>Degree in Engineering</li>
									<li>
										3+ years experience in Full-Stack Engineering, Web
										Development
									</li>
								</ul>
								<p>Within those 3+ years, I have:</p>
								<ul>
									<li>-6 months experience in UI / UX</li>
									<li>-2½ years experience in Software Design</li>
									<li>
										-2½ years experience in Front-end Web Development
									</li>
									<li>-2½ years experience in Webflow Development</li>
								</ul>
								<h2 className="font-grandslang text-[24px]">
									SKILLS
								</h2>
								<p>
									UI/UX Design / Strategy / Product Management / Agile
									Methodologies / Collaboration / Design Sprints /
									Design Systems / HTML and CSS / CMS Design &
									Architecture / Webflow Development / Graphic Design
								</p>

								<button className="px-14 py-[10px] bg-[#1a1818] font-grandslang text-[#ece7e1] text-[25px] rounded-[40px]">
									<a
										href="https://drive.google.com/uc?export=download&id=1wVKkO9d6vW9098MPzI8bByb11jkTUupI
										"
										download="Nwachukwu-Ekene-Resume.pdf"
										target="_blank"
										rel="noopener noreferrer"
									>
										My CV
									</a>
								</button>
								<h2 className="font-grandslang text-[24px] ">
									KUDOS
								</h2>
								<p>
									Some of what is in this portfolio is team work,
									it&apos;s very rare these days to make anything
									great all on your own. I have only included work
									that I had a large contribution to, but whether
									it&apos;s design, ideas, UX, process, engineering,
									mentorship, advice or creative direction, the
									following people have influenced my growth and
									career path in a massive way:{" "}
									<Link
										className="underline "
										href={"https://github.com/PetxCode"}
									>
										Peter Oti
									</Link>
									,{" "}
									<Link
										className="underline "
										href={"https://github.com/Rufai-Ahmed"}
									>
										Ahmed
									</Link>
									. THANK YOU.
								</p>
								<button className="px-14 mt-5 py-[10px] bg-[#1a1818] font-grandslang text-[#ece7e1] text-[25px] rounded-[40px]">
									<Link href="/contact">Contact me</Link>
								</button>
							</div>
						</div>
					</div>

					<div className="-mt-5 md:-mt-0 w-[50%] h-full md:w-[40%]">
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1 }}
						>
							<Image
								alt="Ahmed Rufai"
								width={1000}
								height={1000}
								src={Topper}
								className="rounded-md"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
