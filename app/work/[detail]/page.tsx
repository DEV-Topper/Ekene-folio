"use client";

import { workData } from "@/data/data";
import { iWork } from "@/services/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
	const params = useParams();
	const { detail }: any = params;

	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const pageData: iWork | undefined = workData.find(
		(el: iWork) =>
			el.name?.split(" ").join("-").toLowerCase() === detail
	);

	return (
		<div
			className={`w-full min-h-screen pb-28 flex text-[#1a1818] flex-col items-center bg-[#dec8ae]  `}
		>
			<div className="md:h-screen h-[50px] md:w-[80px] bg-[#dec8ae] w-full flex md:justify-end items-center justify-center sticky md:fixed top-0 md:left-0 z-10">
				<div className="md:h-[80%] w-[85%] flex md:flex-col items-center justify-between gap-8 md:gap-0 md:space-y-8">
					<div className="md:space-y-4 space-x-2 md:space-x-0 flex md:block flex-col items-center justify-center">
						<div className="tracking-[0.3em] text-[10px] font-medium md:-rotate-90 cursor-pointer hover:line-through transition-all duration-300">
							<Link href={"/work"}>WORK</Link>
						</div>
					</div>
					<div className="md:h-[100px] h-[2px] rounded-md md:w-[1px] w-[70px] text-white bg-[#1a1818]" />
					<div className="md:flex-1 hidden md:flex" />
					<div className="tracking-[0.1em] text-[12px] font-medium md:-rotate-90">
						© / 2024
					</div>
				</div>
			</div>

			<div className="md:w-[85%] w-full flex flex-col items-center">
				<div
					className={`md:h-[95vh] h-[60vh] flex items-center md:items-end bg-[#1a1818] w-full font-grandslang justify-center text-center uppercase text-[#ece7e1] ${
						isMounted ? "paintRoll1" : "hidden"
					} ${
						detail.length >= 8 && detail.length < 10
							? "text-[10vw]"
							: detail.length >= 10
							? "text-[10vw]"
							: "text-[15vw] leading-[1]"
					}`}
				>
					{detail?.split("-")!.join(" ")}
				</div>

				<div className="md:w-[60%] w-[80%] flex flex-col items-center my-7 md:my-28 text-[#1a1818]">
					<h4 className="text-[24px] md:text-[30px] lg:text-[50px] font-grandslang font-medium mb-5">
						{pageData?.shortInfo}
					</h4>
					<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
						<div>
							<b className="underline font- ">ROLE</b>
							<p className="mt-2">{pageData?.role}</p>
						</div>
						<div>
							<b className="underline font-  uppercase ">
								Responsibility
							</b>
							<p className="mt-2">{pageData?.responsibility}</p>
						</div>
						<div className="md:col-span-3 lg:col-span-1">
							<b className="underline font- uppercase ">Link</b>
							<p className="mt-2">
								{pageData?.url ? (
									<Link href={`https://${pageData?.url}`}>
										https://{pageData?.url}
									</Link>
								) : (
									"Still in development"
								)}
							</p>
						</div>
					</div>
				</div>
			</div>

			{pageData?.lgImg && (
				<Image
					width={1000}
					className="shadow-xl md:w-[80%]"
					height={1000}
					quality={100}
					src={pageData?.lgImg!}
					alt={`${pageData?.name} image demonstration`}
				/>
			)}

			<div className="md:w-[50%] w-[80%] my-8 md:my-28 text-[18px] leading-9">
				{pageData?.info}
			</div>

			<div className="space-y-10 w-full items-center flex flex-col">
				{pageData?.workingShot && (
					<Image
						width={1000}
						className="shadow-lg md:w-[80%]"
						height={100}
						quality={100}
						src={pageData?.workingShot!}
						alt={`${pageData?.name} working shot`}
					/>
				)}
				{pageData?.usedProgram! && (
					<Image
						width={1000}
						className="shadow-lg md:w-[80%]"
						height={100}
						quality={100}
						src={pageData?.usedProgram!}
						alt={`${pageData?.name} working shot`}
					/>
				)}
			</div>

			<div className="md:w-[50%] w-[80%] md:my-28 my-8 text-[18px] leading-9">
				{pageData?.usedProgramTxt}
			</div>

			{pageData?.demoVid && (
				<div
					className="relative w-[90%] md:w-[80%] mb-8 md:mb-16"
					style={{ paddingBottom: "56.25%" }}
				>
					<video
						width="100%"
						height="100%"
						style={{ position: "absolute", top: 0, left: 0 }}
						className="md:rounded-[40px] rounded-lg shadow-xl"
						autoPlay
						loop
						playsInline
						muted
					>
						<source
							src={pageData?.demoVid!}
							type="video/mp4"
						/>
					</video>
				</div>
			)}
			<center>
				<div className="text-[40px] mb-5 font-grandslang">
					Check it out
				</div>

				<Link href={`https://${pageData?.url}`}>
					{" "}
					<div className="py-2 transition-all duration-300 hover:px-16 cursor-pointer rounded-[40px] px-6 bg-[#1a1818] text-[#ece7e1] text-[15px] md:text-[20px] font-grandslang">
						https://{pageData?.url}{" "}
					</div>
				</Link>
			</center>
		</div>
	);
};

export default Page;
