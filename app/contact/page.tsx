"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
	return (
		<>
			<div className="w-full text-[#ece7e1] overflow-hidden bg-[#1a1818] min-h-screen flex relative">
				<div className="relative w-full flex flex-col md:flex-row items-center flex-wrap lg:flex-nowrap">
					<div className="md:h-screen h-[50px] md:w-[80px] w-full flex md:justify-end md:absolute left-0 items-center justify-center lg:fixed lg:top-0 lg:z-[999]">
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

					<div className="w-full h-screen flex justify-center md:justify-normal md:items-center">
						<div className="md:ml-[14vw] md:w-[30%] w-[85%] my-10 md:my-0">
							<motion.h1
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 1, delay: 0.5 }}
								className="text-[15vw] font-grandslang leading-[1.3]"
							>
								Hello.
							</motion.h1>

							<p className="my-5 md:my-0 md:mb-5 text-[12px] md:text-[0.9vw]">
								Ready to elevate your online presence with a stunning,
								meticulously crafted website that empowers you to take
								ownership and control? Let's connect and bring your
								vision to life.
							</p>

							<p className="mb-5 text-[12px] md:text-[0.9vw]">
								Email:{" "}
								<Link
									href={"mailto:rehobothekene@gmail.com"}
									className="hover:line-through transition-all duration-300 underline cursor-pointer mr-2"
								>
									rehobothekene@gmail.com
								</Link>{" "}
								<br /> On the Internet:{" "}
								<Link
									href={
										"https://www.linkedin.com/in/nwachukwu-ekene-rehoboth/"
									}
									className="hover:line-through transition-all duration-300 underline cursor-pointer mr-2"
								>
									LinkedIn
								</Link>{" "}
								/{" "}
								<Link
									href={"https://twitter.com/dev_topper"}
									className="hover:line-through transition-all duration-300 underline cursor-pointer mx-2"
								>
									Twitter
								</Link>{" "}
								/{" "}
								<Link
									href={
										"https://github.com/DEV-Topper?tab=repositories"
									}
									className="hover:line-through transition-all duration-300 underline cursor-pointer md:mx-2"
								>
									GitHub
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
