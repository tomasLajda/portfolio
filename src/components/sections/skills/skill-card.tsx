import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "../../ui/card";

export interface SkillCardProps {
	name: string;
	description: string;
	image: string;
}

const SkillCard = ({ image, name, description }: SkillCardProps) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.08,
				y: -10,
			}}
			transition={{ type: "spring", stiffness: 400, damping: 15 }}
			className="group"
		>
			<Card className="w-56 h-56 lg:w-72 lg:h-72 flex flex-col items-center justify-center text-center bg-gradient-to-br from-card via-card to-card/80 border-2 border-primary/20 hover:border-primary/60 shadow-lg hover:shadow-[0_0_30px_rgba(128,0,255,0.4)] transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<motion.img
					src={image}
					alt={name}
					className="mb-4 w-20 h-20 lg:w-32 lg:h-32 relative z-10 drop-shadow-[0_0_10px_rgba(128,0,255,0.3)]"
					whileHover={{ rotate: 360 }}
					transition={{ duration: 0.6 }}
				/>
				<CardContent className="relative z-10">
					<CardTitle className="mb-3 text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
						{name}
					</CardTitle>
					<CardDescription className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
						{description}
					</CardDescription>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default SkillCard;
