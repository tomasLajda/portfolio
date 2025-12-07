import bun from "../assets/icons/Bun.svg";
import c from "../assets/icons/c.svg";
import cpp from "../assets/icons/cpp.svg";
import git from "../assets/icons/git.svg";
import linux from "../assets/icons/linux.svg";
import python from "../assets/icons/python.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";
import ts from "../assets/icons/ts.svg";

const skillsList = [
	{
		name: "React",
		description: "Frontend framework with which I am most familiar.",
		image: react,
	},
	{
		name: "TypeScript",
		description: "I use TypeScript for all my js projects.",
		image: ts,
	},
	{
		name: "Bun",
		description: "My choice for backend development with Express.js.",
		image: bun,
	},
	{
		name: "CSS",
		description:
			"I use Tailwind CSS for styling. I am also familiar with SCSS.",
		image: tailwind,
	},
	{
		name: "GIT",
		description: "You never know when you gonna need it.",
		image: git,
	},
	{
		name: "Linux",
		description:
			"I rely on Linux as my primary operating system for software development.",
		image: linux,
	},
	{
		name: "C++",
		description: "Core engineering language for systems programming.",
		image: cpp,
	},
	{
		name: "C",
		description: "Foundation of low-level programming.",
		image: c,
	},
	{
		name: "Python",
		description: "Used for scripting and automation tasks.",
		image: python,
	},
];

export default skillsList;
