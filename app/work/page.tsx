"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { getRepos } from "@/api/API";
import { workData } from "@/data/data";
import { addRepo } from "@/global/reduxState";
import { iWork } from "@/services/interfaces";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	BsArrowDown,
	BsArrowUpRightSquareFill,
} from "react-icons/bs";
import { FaEllipsis } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
	const dispatch = useDispatch();
	const [num, setNum] = useState<number>(1);

	const repo: Array<{}> | [] | undefined = useSelector(
		(state: unknown | undefined | any): any => state?.repo!
	);

	useEffect(() => {
		getRepos(num).then((res: any) =>
			dispatch(addRepo([...res, ...repo!]))
		);
	}, [num, dispatch, repo]);

	const [parent] = useAutoAnimate();
	const [state, setState] = useState<boolean>(false);

	return (
		<>
			<div className="w-full text-[#ece7e1] overflow-x-hidden bg-[#1a1818] min-h-full flex relative">
				<div className="relative w-full flex flex-col md:flex-row items-center flex-wrap lg:flex-nowrap">
					<div className="md:h-screen h-[50px] md:w-[80px] w-full flex md:justify-end items-center justify-center lg:fixed lg:top-0 lg:z-[999]">
						<div className="md:h-[80%] w-[85%] flex md:flex-col items-center justify-between gap-8 md:gap-0 md:space-y-8">
							<div className="md:space-y-4 space-x-2 md:space-x-0 flex md:block items-center">
								<Link href={"/"}>
									<div className="tracking-[0.3em] text-[10px] font-medium md:-rotate-90 cursor-pointer hover:line-through transition-all duration-300">
										HOME{" "}
									</div>
								</Link>
							</div>
							<div className="md:h-[100px] h-[2px] rounded-md md:w-[1px] w-[70px] text-white bg-[#ece7e1]" />
							<div className="md:flex-1 hidden md:flex" />
							<div className="tracking-[0.1em] text-[8px] font-medium md:-rotate-90">
								© / 2024
							</div>
						</div>
					</div>

					<div className="md:w-[calc(100%-80px)] xl:pl-6 lg:w-[700px] lg:h-screen justify-center flex pt-[15%] md:pt-[20%] w-[100%] md:h-fit flex-col items-center lg:fixed lg:top-0 lg:z-20 ">
						<div className="w-[80%] space-y-3">
							<h1 className="font-medium">WORK</h1>
							<p className="text-[13px] font-light md:w-[65%]">
								This is a showcase of my best work in a variety of
								fields including Graphic and Software Development,
								No-Code Development, Product Design, Product
								Management and Testing Managment.
							</p>
							<p className="text-[13px] font-light md:w-[65%]">
								The world of digital design and development is
								constantly evolving and so has my role over the last 3
								years. I’m still learning and gaining new skills every
								day.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full bg-[#1a1818] text-[#ece7e1] absolute lg:top-0 flex justify-end md:items-center min-h-screen lg:pt-[150px]">
				<div className="w-[90%] mt-5 xl:w-[61%] md:w-[90%] lg:w-[55%] text-start uppercase font-thin leading-[1.3] lg:leading-[0.8] min-h-full lg:z-[999] justify-start md:justify-center pb-5 flex flex-col">
					<div className="md:text-[68px] xl:text-[90px] text-[40px] overflow-hidden">
						{workData &&
							workData.map((el: iWork, i: number) => (
								<div key={i}>
									<Link
										href={`/work/${el.name
											?.split(" ")
											.join("-")
											.toLowerCase()}`}
										className="hover:italic cursor-pointer font-grandslang transition-all duration-300 text-[#ece7e1] hover:ml-3"
									>
										{el.name}
									</Link>
									<div className="text-[#ece7e1] font-light text-[10px] md:flex items-center gap-2 hidden mb-5">
										- {el.type}
										{el.info && (
											<div className="w-[30px] py-1 text-black flex items-center justify-center text-[13px] rounded-md bg-[#ece7e1]">
												<FaEllipsis />
											</div>
										)}
									</div>
								</div>
							))}

						<div
							className="mt-24"
							ref={parent}
						>
							<h2
								onClick={() => setState(!state)}
								className="text-[30px] flex items-center gap-2 cursor-pointer hover:font-medium transition-all duration-300"
							>
								Repositories <BsArrowDown />
							</h2>

							{state &&
								repo?.map((el: {} | any | undefined, i: number) => (
									<div
										className="mt-3 text-[30px] flex gap-3 items-center group cursor-pointer"
										key={i}
									>
										<Link
											href={`${el?.html_url}`}
											className="hover:italic cursor-pointer font-grandslang transition-all duration-300 text-[#ece7e1] hover:ml-3"
										>
											{el?.name}
										</Link>

										<BsArrowUpRightSquareFill className="group-hover:opacity-100 opacity-0 transition-all duration-300" />
									</div>
								))}
							{state && (
								<p
									onClick={() => setNum(num + 1)}
									className="text-sm mt-4 hover:font-medium transition-all duration-300 cursor-pointer"
								>
									See more...
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
