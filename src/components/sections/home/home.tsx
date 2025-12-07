import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import profileImage from "../../../assets/portrait.png";
import Link from "../../link";
import Wrapper from "../../wrapper";

const Home = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

	return (
		<Wrapper className="mt-12" id="Home">
			<motion.div
				style={{
					backgroundImage: `linear-gradient(135deg, rgba(128, 0, 255, 0.15) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%), url(${profileImage})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "right bottom",
					boxShadow:
						"0 0 40px 8px rgba(128, 0, 255, 0.4), inset 0 0 100px rgba(128, 0, 255, 0.1)",
					borderRadius: "16px",
					border: "1px solid rgba(128, 0, 255, 0.2)",
				}}
				whileHover={{
					scale: 1.01,
					boxShadow:
						"0 0 60px 12px rgba(128, 0, 255, 0.5), inset 0 0 100px rgba(128, 0, 255, 0.15)",
				}}
				transition={{
					duration: 0.5,
					ease: "easeOut",
				}}
				className="px-12 overflow-hidden relative"
			>
				<div className="h-[70vh] relative flex items-center">
					<motion.div
						className="relative z-10 -bottom-12"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<motion.h1
							className="mb-3"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<span className="text-foreground/80">Hi, I'm</span>{" "}
							{isMobile && <br />}
							<span className="font-bold text-6xl bg-gradient-to-r from-[hsl(var(--primary))] to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(128,0,255,0.5)]">
								Tomáš Lajda
							</span>
						</motion.h1>
						<motion.h2
							className="mb-3 text-3xl font-light text-foreground/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							I build{" "}
							<span className="text-[hsl(var(--primary))] font-semibold">
								scalable applications
							</span>
							.
						</motion.h2>
						<motion.h3
							className="mb-6 text-foreground/70"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.8 }}
						>
							Software Engineer | TypeScript, React & Bun/Node
						</motion.h3>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1 }}
						>
							<Link
								redirect={false}
								text="Contact Me"
								url="#Contact"
								variant="default"
							/>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</Wrapper>
	);
};

export default Home;
