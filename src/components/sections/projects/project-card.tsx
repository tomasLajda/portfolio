import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { CarouselItem } from "../../ui/carousel";

interface ProjectCardProps {
	title: string;
	description: string;
	url: string;
	img: string;
}

const ProjectCard = ({ img, title, description, url }: ProjectCardProps) => {
	return (
		<CarouselItem className="lg:basis-1/2">
			<Card className="flex flex-col items-center p-6 bg-gradient-to-br from-[hsl(var(--primary))] to-purple-700 h-full hover:from-purple-600 hover:to-[hsl(var(--primary))] transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(128,0,255,0.5)] border border-purple-500/30 backdrop-blur-sm">
				<CardHeader className="min-h-28 w-full">
					<CardTitle className="font-bold mb-4 text-2xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col items-center flex-grow w-full">
					<div className="relative mb-8 w-full overflow-hidden rounded-lg shadow-xl group">
						<img
							src={img}
							alt={title}
							className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>
					<p className="max-w-[450px] text-purple-100 text-justify leading-relaxed text-sm lg:text-base">
						{description} <br />
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 text-white underline font-semibold hover:text-purple-200 transition-colors duration-300 mt-2"
						>
							Learn more →
						</a>
					</p>
				</CardContent>
			</Card>
		</CarouselItem>
	);
};

export default ProjectCard;
