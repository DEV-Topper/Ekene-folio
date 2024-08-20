"use client";
import React, { useEffect, useState } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Page = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [externalLink, setExternalLink] = useState<string>("");

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleExternalLinkClick = (url: string) => {
		setExternalLink(url);
		setShowModal(true);
		setTimeout(() => {
			setShowModal(false);
			window.location.href = url;
		}, 3000); // Show modal for 3 seconds
	};

	return (
		<div className={` ${isMounted ? "paintRoll" : ""}`}>
			<div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

			<div className="relative w-full overflow-x-hidden bg-[#dec8ae] h-screen text-[50px] flex lg:items-center 2xl:justify-between lg:justify-between md:pr-[50px] lg:pr-[100px] flex-wrap md:flex-nowrap">
				{/* Sidebar with Icons */}
				<div className="md:h-screen h-[50px] md:w-[90px] w-full flex md:justify-end items-center justify-center">
					<div className="md:h-[85%] w-[85%] flex md:flex-col items-center justify-between gap-8 md:gap-0 md:space-y-8">
						<div className="md:space-y-4 space-x-2 md:space-x-0 flex md:block items-center">
							<Link href="https://www.linkedin.com/in/nwachukwu-ekene-rehoboth/">
								<BsLinkedin
									className="rounded-md"
									size={20}
								/>
							</Link>

							<Link href="https://twitter.com/dev_topper">
								<BsTwitter
									className="lg:mt-4"
									size={20}
								/>
							</Link>
							<Link href="https://github.com/DEV-Topper?tab=repositories">
								<BsGithub
									className="lg:mt-4"
									size={20}
								/>
							</Link>
						</div>
						<div className="md:h-[100px] h-[2px] rounded-md md:w-[1px] w-[70px] bg-black text-white" />
						<div className="md:flex-1 hidden md:flex" />
						<div className="font-light text-[12px] md:-rotate-90">
							© / 2024
						</div>
					</div>
				</div>

				{/* Main Content */}
				<center>
					<div className="2xl:w-[750px] w-[85%] flex justify-center md:h-full md:items-center lg:items-end lg:h-auto text-start 2xl:px-32 items-end text-[13px] pt-[0px] lg:pt-[20%] font-normal text-[#1A1818]">
						<div className="space-y-4 w-[300px]">
							<h3 className="text-[15px] text-[#1A1818] font-medium uppercase">
								Nwachukwu Ekene
							</h3>
							<p>
								Full-Stack Engineer / Web Designer / UI/UX Designer
							</p>
							<p>
								Currently working part-time as a Testing Manager at{" "}
								<span
									onClick={() =>
										handleExternalLinkClick(
											"https://ekene-folio.vercel.app/"
										)
									}
									className="hover:line-through transition-all duration-300 underline font-medium cursor-pointer"
								>
									NEXT
								</span>
							</p>
						</div>
					</div>
				</center>

				{/* Navigation Links */}
				<center>
					<div className="lg:w-full w-[85%] text-start font-grandslang uppercase h-full lg:h-[85%] font-thin text-[18vw] md:text-[9vw] leading-[1] lg:text-[9.4vw] lg:leading-[0.87] justify-start md:justify-center flex flex-col">
						<div className="">
							<p>
								<Link
									href="/work"
									className="hover:italic cursor-pointer"
								>
									work
								</Link>
							</p>
							<p>
								<Link
									href="/about"
									className="hover:italic cursor-pointer"
								>
									about
								</Link>
							</p>
							<p>
								<Link
									href="/resume"
									className="hover:italic cursor-pointer"
								>
									resume
								</Link>
							</p>
							<p>
								<Link
									href="/contact"
									className="hover:italic cursor-pointer"
								>
									contact
								</Link>
							</p>
							<p>
								<Link
									href="/skill"
									className="hover:italic cursor-pointer"
								>
									skills
								</Link>
							</p>
						</div>
					</div>
				</center>
			</div>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
					<div className="bg-white p-8 rounded-lg shadow-lg text-center">
						<h2 className="text-lg font-bold mb-4">Heads Up!</h2>
						<p>
							Before you go, don&apos;t forget to check out the work,
							about, resume, contact, and skills sections!
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Page;
