"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Topper from "../../public/assets/ekenepic.jpg";
import { motion } from "framer-motion";

const Page = () => {
	return (
		<div className="w-full pb-20 bg-[#dec8ae]  min-h-screen flex flex-col items-center text-[#1a1818]">
			<div className="lg:h-screen h-[50px] lg:w-[80px] bg-[#dec8ae] w-full flex lg:justify-end items-center justify-center sticky lg:fixed top-0 lg:left-0 z-10">
				<div className="lg:h-[80%] w-[85%] flex lg:flex-col items-center justify-between gap-8 lg:gap-0 lg:space-y-8">
					<div className="lg:space-y-4 space-x-2 lg:space-x-0 flex lg:block flex-col items-center justify-center">
						<div className="tracking-[0.3em] text-[10px] font-medium lg:-rotate-90 cursor-pointer hover:line-through transition-all duration-300">
							<Link href={"/"}>HOME</Link>
						</div>
					</div>
					<div className="lg:h-[100px] h-[2px] rounded-lg lg:w-[1px] w-[70px] text-white bg-[#1a1818]" />
					<div className="lg:flex-1 hidden lg:flex" />
					<div className="tracking-[0.1em] text-[12px] font-medium lg:-rotate-90">
						© / 2024
					</div>
				</div>
			</div>

			<div className="w-[85%] lg:w-[70vw] mt-5 md:mt-[120px]">
				<div className="flex gap-10 justify-between">
					<div className="w-[50%]">
						<motion.h1
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
							className="text-[17vw] md:text-[13.8vw] font-grandslang leading-[1]"
						>
							About
						</motion.h1>
						<div className="absolute md:static bg-[#dec8ae]  left-0 pb-20 md:pb-0 flex flex-col items-center w-[100%]">
							<h5 className="font-grandslang text-[6vw] w-[85%] md:text-[2.5vw] font-light leading-[1.3] mt-10 md:w-[100%]">
								I&apos;m Ekene. A software engineer proffering world
								class solutions with technology..❤️👨🏾‍💻🖱️
							</h5>

							<div className="text-[14px] font-light space-y-8 w-[85%] md:w-full mt-8">
								The intersection of creativity and technology has
								always captivated me. My journey began with Canva,
								diving into graphic design. This sparked my interest
								and led me to Photoshop, where I refined my skills. As
								my passion for the digital world grew, I transitioned
								into software engineering. Starting with HTML, CSS,
								and JavaScript, I discovered a new way to blend
								creativity with technology.
								<p className="mt-3">
									{" "}
									As I progressed, I delved into React, drawn by its
									capacity for dynamic web applications. This led me
									to explore modern frameworks like Vite and, more
									recently, the powerful features of Next.js.
									Throughout this journey, my passion for creating
									beautifully designed websites has been a constant,
									driving me to blend aesthetics with functionality in
									every project.
								</p>
								<p>
									{" "}
									As a software engineer, what truly excites me is
									crafting solutions that blend aesthetics with
									functionality. It&apos;s about designing experiences
									that not only look great but also serve a real
									purpose. Whether it&apos;s an intuitive user
									interface, a seamless e-commerce platform, or a
									productivity tool, I thrive on solving problems and
									enhancing lives. My approach is laser-focused:
									understand user needs, pinpoint the right problems,
									and swiftly deliver effective solutions. Continuous
									iteration and improvement based on feedback ensure
									that my work evolves to provide even greater value
									over time.
								</p>
								<p>
									One of my favorite quotes comes from CodeLab Set 08
									[MY SET]: <br />
									<span className="font-grandslang leading-[1] text-[40px]">
										&quot;push().beyondlimit&quot;
									</span>
								</p>
								<p>
									This resonates deeply with me because it
									encapsulates my approach to work and life. I am
									driven by the challenge of tackling difficult
									problems and creating meaningful, impactful
									solutions. For me, it&apos;s not just about making
									things look good; it&apos;s about making things that
									matter.
								</p>
							</div>
						</div>
					</div>

					<div className="-mt-5 md:-mt-0 w-[50%] h-full md:w-[40%]">
						<motion.div
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="ml-5"
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
