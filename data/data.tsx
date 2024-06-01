import { iWork } from "@/services/interfaces";
import next from "../public/assets/next.png";
import workShotNext from "../public/assets/workShotNext.png";
import NextProgram from "../public/assets/nextProgramShot.png";
import headwind from "../public/assets/headwind_shot.png";
import headwindWork from "../public/assets/head_work.png";
import headPro from "../public/assets/head_pro.png";
import ecoBIN from "../public/assets/ecoBIN.png";
import ecoshot from "../public/assets/ecoshot.png";
import hulu from "../public/assets/hulu.png";
import hulushot from "../public/assets/hulushot.png";
// import hello_work from "../public/assets/hello_work.png";
import revie from "../public/assets/revie.png";
import revieShot from "../public/assets/revieShot.png";
import tgImg from "../public/assets/tgImg.png";
import tgShot from "../public/assets/tgShot.png";

export const workData: iWork[] = [
	{
		name: "NEXT",
		type: "Web application",
		shortInfo:
			"A school-administrative platform that aims to stream-line and eradicate red-tapism in Ajegunle. A golden project!!!",
		role: "Frontend Developer",
		responsibility:
			"Lesson note module, article module, and a few backend development",
		url: "just-next.web.app",
		lgImg: next,
		info: (
			<div className="mt-10">
				This project was a collaboration with CodeLab Set08 Students
				who designed the platform.
				<p className="mt-10">
					Being an educational institution, Learnify had specific
					requirements for how the platform should function and what
					kind of modules they needed. They also required a
					user-friendly interface, so I recommended using Moodle as
					the learning management system to ensure they could manage
					their own content effortlessly.
				</p>
			</div>
		),
		workingShot: workShotNext,
		usedProgram: NextProgram,
		demoVid: "/assets/scroll.mp4",
		usedProgramTxt:
			"I learned a lot about React while developing this platform. I love merging JavaScript into my projects, and despite the time it takes, frontend development is my strongest skill. With React, you can create dynamic, interactive user interfaces efficiently. The flexibility of React allowed me to build some truly engaging modules, and I had a lot of fun bringing these elements to life.",
	},
	{
		name: "HEAdwind",
		type: "Frontend Development",
		shortInfo:
			"This is a simple clone of the taiwind components site. Just wanted to recreate to enhance my knowledge on props.",
		role: "Frontend Designs",
		responsibility: "Full responsibility of building from scratch",
		url: "headwind-pi.vercel.app",
		lgImg: headwind,
		workingShot: headwindWork,
		usedProgram: headPro,
		demoVid: "/assets/head_demo.mp4",
		info: (
			<div className="mt-10">
				This project was solely built by me, driven by a desire for
				self-improvement. The platform was cloned from Tailwind.
				<p className="mt-10">
					The purpose of the site is to streamline the development
					process for developers by providing them with a repository
					of components, enabling them to expedite their work and
					enhance productivity.
				</p>
			</div>
		),
		usedProgramTxt:
			"I learned a lot about React while developing this platform. I love merging JavaScript into my projects, and despite the time it takes, frontend development is my strongest skill. With React, you can create dynamic, interactive user interfaces efficiently. The flexibility of React allowed me to build some truly engaging modules, and I had a lot of fun bringing these elements to life.",
	},
	{
		name: "ecoBIN",
		type: "Frontend Development",
		shortInfo:
			"A fintech solution that is meant to revolutionalize the way it works and more... in Ajegunle",
		role: "Frontend Developer",
		responsibility:
			"Building of the user profile interface, Auth and more...",
		lgImg: ecoBIN,
		info: (
			<div className="mt-10">
				This project is being built in collaboration with the students
				of Codelab's Set 07. The purpose of the site is to
				revolutionize the payment process in Ajegunle, making it more
				practical, efficient, and accessible for the community.
				<p className="mt-10">
					By leveraging modern technology and user-friendly design, we
					aim to simplify transactions and enhance the overall payment
					experience for both businesses and individuals in Ajegunle.
					This initiative not only improves convenience but also
					fosters economic growth and financial inclusion in the area.
					Our collaboration ensures that the platform is tailored to
					meet the unique needs of the local population, promoting
					widespread adoption and long-term sustainability.
				</p>
			</div>
		),
		usedProgram: NextProgram,
		usedProgramTxt:
			"I learned a lot about React while developing this platform. I love merging JavaScript into my projects, and despite the time it takes, frontend development is my strongest skill. With React, you can create dynamic, interactive user interfaces efficiently. The flexibility of React allowed me to build some truly engaging modules, and I had a lot of fun bringing these elements to life.",
		workingShot: ecoshot,
		demoVid: "/assets/ecoBIN .mp4",
		url: "http://ecobin.pages.dev",
	},
	{
		name: "HULU-Clone",
		type: "Frontend Development",
		role: "Frontend Developer",
		responsibility: "Cloning HULU using React...",
		url: "hulu-sigma-rouge.vercel.app",
		lgImg: hulu,
		usedProgram: hulushot,
		// workingShot: hello_work,
		usedProgramTxt:
			"I learned a lot about React while developing this platform. I love merging JavaScript into my projects, and despite the time it takes, frontend development is my strongest skill. With React, you can create dynamic, interactive user interfaces efficiently. The flexibility of React allowed me to build some truly engaging modules, and I had a lot of fun bringing these elements to life.",
		shortInfo:
			"I cloned HULU using React, utilizing URL parameters to map data to other pages by ID for seamless navigation and user experience.",

		info: (
			<div className="mt-10">
				I replicated the HULU platform using React, leveraging URL
				parameters to seamlessly map data to other pages by ID. This
				implementation ensures efficient navigation and a smooth user
				experience, allowing users to explore content effortlessly.
				<p className="mt-10">
					Through React, I've meticulously reconstructed HULU,
					employing URL parameters to seamlessly link data across
					pages by ID. This approach ensures users can effortlessly
					navigate through the platform, accessing content with ease.
					By leveraging React's capabilities, I've crafted a dynamic
					and intuitive user experience, mirroring the functionality
					of the original HULU platform.
				</p>
			</div>
		),
		demoVid: "/assets/huluvid.mp4",
	},
	{
		name: "Revie Insight",
		type: "Backend Development",
		role: "Backend Developer",
		responsibility: "Using purely JavaScript to create a RESTful API",
		url: "revie-be.onrender.com/",
		lgImg: revie,
		info: (
			<div className="mt-10">
				This project involves the development of a robust backend
				system for Home Insight, a review platform. As the Backend
				Developer, my primary responsibility was to create a RESTful
				API using purely JavaScript.
				<p className="mt-10">
					The API Revie is a hypothetical platform where users can
					sign up with their basic information and post reviews about
					apartments they've previously lived in. These reviews can
					include optional videos and/or images. The users can give
					reviews about the landlords, the environment the apartment
					is situated, and the quality of amenities in the apartment.
					These reviews can be uniquely marked as helpful by random
					visitors of the platform. Visitors can also sort these
					reviews based on the most helpful(by count) or most recent.
				</p>
			</div>
		),
		shortInfo:
			"The API manages various functions including user authentication, data handling, and database interactions.",
		usedProgramTxt:
			"For this project, I utilized MongoDB as the primary database due to its scalability and flexibility in handling large volumes of data. I employed Express to set up the server, ensuring efficient routing and middleware management. The server was meticulously structured to handle various API requests seamlessly. For hosting, I chose Render, which provided a reliable and robust platform to deploy the application, ensuring consistent uptime and smooth performance. The combination of these technologies allowed for the creation of a powerful, efficient, and scalable backend solution that meets the demands of the Home Insight platform.",
		workingShot: revieShot,
	},
	// {
	// 	name: "Task Guardian",
	// 	type: "Full Stack Development",
	// 	shortInfo:
	// 		"Task Guardian is a comprehensive task management platform developed primarily for leisure and to improve my full stack development skills.",
	// 	role: "Full Stack Developer",
	// 	responsibility:
	// 		"Full responsibility of building from scratch, including both frontend and backend development",
	// 	url: "task-guardian2-0.vercel.app",
	// 	lgImg: tgImg,
	// 	workingShot: tgShot,
	// 	usedProgram: NextProgram,
	// 	demoVid: "/assets/tgD.mp4",
	// 	info: (
	// 		<div className="mt-10">
	// 			This project was solely built by me, driven by a desire for
	// 			self-improvement and to enhance my full stack development
	// 			skills. Task Guardian is a comprehensive task management
	// 			platform.
	// 			<p className="mt-10">
	// 				The purpose of this platform is to provide users with an
	// 				intuitive and efficient way to manage their tasks and
	// 				projects. It offers a range of features such as task
	// 				creation, progress tracking, and deadline reminders, all
	// 				designed to help users stay organized and productive.
	// 			</p>
	// 		</div>
	// 	),
	// 	usedProgramTxt:
	// 		"For this project, I utilized React for the frontend due to its efficiency in creating dynamic user interfaces. The backend was built with Node.js and Express, ensuring robust server-side operations. MongoDB was chosen as the database for its scalability and flexibility. I hosted the application on Vercel, which provided a reliable and performant platform for deployment. This full stack build allowed me to enhance my skills across various technologies and create a functional and user-friendly task management tool.",
	// },
];
