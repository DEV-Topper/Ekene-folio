"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import html from "../../public/assets/htmL.png";
import css from "../../public/assets/Css.png";
import react from "../../public/assets/reactPic.png";
import vite from "../../public/assets/Vite.png";
import mongodb from "../../public/assets/mongoDBpic.png";
import typescript from "../../public/assets/typeScript.png";
import javascript from "../../public/assets/javaScript.png";
import firebase from "../../public/assets/fireBase.png";
import cloudfare from "../../public/assets/cloudfare.png";
import github from "../../public/assets/github.png";
import daisyUI from "../../public/assets/daisyUI.png";
import nodejs from "../../public/assets/nodeJS.png";
import Nextjs from "../../public/assets/nextjspic.png";
import figma from "../../public/assets/figmaLogo.png";
import vercel from "../../public/assets/vercelPic.png";
import tailwind from "../../public/assets/tailwindpic.png";
import redux from "../../public/assets/redux.png";
import flowbite from "../../public/assets/flowbite.png";
import reactNative from "../../public/assets/reactNative.png";
import gitcontrol from "../../public/assets//gitcontrol.png";
import express from "../../public/assets/Express.png";
import styledcomponent from "../../public/assets/StyledComponent.png";
import render from "../../public/assets/render.png";
import cloudinary from "../../public/assets/cloudinary.png";

interface Skill {
	src: StaticImageData;
	alt: string;
}

const Page: React.FC = () => {
	return (
		<div className="min-h-screen bg-beige-100 text-gray-900 overflow-hidden bg-[#dec8ae] flex flex-col items-center justify-center">
			<motion.h1
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
				className="text-5xl font-grandslang leading-[1.3] mt-5 mb-8"
			>
				Full-Stack Engineer
			</motion.h1>
			<div className="flex flex-wrap justify-center mx-auto max-w-screen-xl">
				{skills.map((skill, index) => (
					<SkillImage
						key={index}
						src={skill.src}
						alt={skill.alt}
					/>
				))}
			</div>
		</div>
	);
};

const SkillImage: React.FC<{ src: StaticImageData; alt: string }> = ({
	src,
	alt,
}) => (
	<div className="w-32 h-32 flex items-center justify-center rounded-lg m-4 shadow-lg transition transform hover:scale-110 cursor-pointer">
		<Image
			src={src}
			alt={alt}
			width={100}
			height={100}
		/>
	</div>
);

const skills: Skill[] = [
	{ src: html, alt: "HTML" },
	{ src: css, alt: "CSS" },
	{ src: typescript, alt: "TypeScript" },
	{ src: javascript, alt: "JavaScript" },
	{ src: react, alt: "React" },
	{ src: vite, alt: "Vite" },
	{ src: mongodb, alt: "MongoDB" },
	{ src: nodejs, alt: "Node.js" },
	{ src: Nextjs, alt: "Next.js" },
	{ src: cloudfare, alt: "Cloudflare" },
	{ src: github, alt: "GitHub" },
	{ src: firebase, alt: "Firebase" },
	{ src: daisyUI, alt: "DaisyUI" },
	{ src: vercel, alt: "Vercel" },
	{ src: tailwind, alt: "Tailwind CSS" },
	{ src: redux, alt: "Redux" },
	{ src: flowbite, alt: "Flowbite" },
	{ src: gitcontrol, alt: "GitControl" },
	{ src: reactNative, alt: "React-Native" },
	{ src: express, alt: "Express" },
	{ src: styledcomponent, alt: "Styled Component" },
	{ src: render, alt: "Render" },
	{ src: figma, alt: "Figma" },
	{ src: cloudinary, alt: "Cloudinary" },
];

export default Page;
