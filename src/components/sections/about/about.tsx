import { Terminal } from "lucide-react";
import Reveal from "../../../animations/reveal";
import skillsList from "../../../utils/skills-list";
import Wrapper from "../../wrapper";
import Skills from "../skills/skills";

const About = () => {
	return (
		<Wrapper
			bgColor="bg-[hsl(var(--primary))]"
			textColor="white"
			id="About"
			className="pr-8"
		>
			<Reveal>
				<div>
					<h1 className="mb-8 text-5xl font-bold">About</h1>
					<div className="flex items-start">
						<Terminal className="h-8 min-w-12 md:min-w-16 md:h-12 relative right-3 text-purple-300 drop-shadow-[0_0_10px_rgba(128,0,255,0.5)]" />
						<div className="space-y-4">
							<p className="ml-1 text-base sm:text-lg leading-relaxed text-purple-50">
								Software Engineer specializing in the JavaScript ecosystem with
								a rigorous background in Computer Science and Networking. I
								bridge the gap between dynamic frontend interfaces and robust
								backend logic.
							</p>

							<p className="ml-1 text-base sm:text-lg leading-relaxed text-purple-50">
								With professional experience at Tricentis and Inlogic Software,
								I've developed enterprise-grade solutions and high-performance
								game mechanics. My expertise spans the full stack—from React and
								TypeScript on the frontend to Node.js backend
								systems—complemented by a solid foundation in systems
								programming with C++ and networking principles.
							</p>

							<p className="ml-1 text-base sm:text-lg leading-relaxed text-purple-50">
								I'm passionate about writing clean, maintainable code and
								delivering scalable solutions that make an impact. You can
								explore my projects on{" "}
								<a
									href="https://github.com/tomasLajda"
									target="_blank"
									rel="noopener noreferrer"
									className="underline hover:opacity-80 text-white font-semibold hover:text-purple-200 transition-colors duration-200"
								>
									GitHub
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</Reveal>
			<Reveal>
				<div>
					<h1 className="my-8 text-5xl font-bold">Experience</h1>
					<div className="space-y-6">
						<div className="flex items-start">
							<div className="ml-12 p-6 rounded-lg bg-gradient-to-r from-primary/20 to-purple-500/10 border border-purple-500/30 shadow-lg hover:shadow-[0_0_20px_rgba(128,0,255,0.3)] transition-all duration-300">
								<h3 className="font-semibold text-2xl text-white">
									Software Engineer
								</h3>
								<h4 className="text-purple-200 text-xl font-semibold mt-1">
									Tricentis (Internship) — July 2025 to September 2025
								</h4>
								<p className="mt-3 text-purple-50 leading-relaxed">
									Contributed to enterprise software solutions with focus on
									code quality and best practices. Worked in Agile environment
									using TypeScript to develop, test and document features for
									QTest test management system.
								</p>
								<p className="mt-3 text-sm text-purple-100">
									<strong className="text-white">Key Skills:</strong> Agile,
									TypeScript, Testing, Jest, OpenAPI Enterprise Software
								</p>
							</div>
						</div>
						<div className="flex items-start">
							<div className="ml-12 p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-primary/20 border border-purple-500/30 shadow-lg hover:shadow-[0_0_20px_rgba(128,0,255,0.3)] transition-all duration-300">
								<h3 className="font-semibold text-2xl text-white">
									Game Developer
								</h3>
								<h4 className="text-purple-200 text-xl font-semibold mt-1">
									Inlogic Software (Part-time) — September 2024 to March 2025
								</h4>
								<p className="mt-3 text-purple-50 leading-relaxed">
									Worked on developing browser games with a team to deliver
									quality experience. Focused on gameplay mechanics, performance
									improvements, and debugging. Utilized Phaser framework and
									JavaScript to create engaging game features.
								</p>
								<p className="mt-3 text-sm text-purple-100">
									<strong className="text-white">Key Skills:</strong> JS, Game
									Development, Phaser
								</p>
							</div>
						</div>
					</div>
				</div>
			</Reveal>
			<Reveal>
				<div>
					<h1 className="my-8 text-5xl font-bold">Education</h1>
					<div className="space-y-6 ml-12">
						<div className="flex items-start justify-between flex-col xl:flex-row gap-6">
							<div className="flex-1 p-5 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
								<h3 className="font-semibold text-2xl text-white">
									Infomation Technology
								</h3>
								<h4 className="text-purple-200 text-xl font-semibold mt-1">
									BUT FIT Brno — September 2023 to June 2026
								</h4>
								<p className="mt-3 text-purple-50 leading-relaxed">
									Currently pursuing a Bachelor's degree in Information
									Technology at BUT FIT Brno. My coursework includes software
									development, algorithms, and computer systems, providing me
									with a strong foundation in both theoretical and practical
									aspects of IT.
								</p>
							</div>
							<div className="flex-1 p-5 rounded-lg bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
								<h3 className="font-semibold text-2xl text-white">
									Exchange studies
								</h3>
								<h4 className="text-purple-200 text-xl font-semibold mt-1">
									Taltech Tallinn — February 2025 to June 2025
								</h4>
								<p className="mt-3 text-purple-50 leading-relaxed">
									Participated in an exchange program at Taltech Tallinn, where
									I expanded my knowledge in software engineering. This
									experience allowed me to collaborate with international
									students, adapt to new environments, and gain a broader
									perspective on technology, innovation and life in general.
								</p>
							</div>
						</div>
					</div>
				</div>
			</Reveal>
			<Reveal>
				<Skills skills={skillsList} />
			</Reveal>
		</Wrapper>
	);
};

export default About;
