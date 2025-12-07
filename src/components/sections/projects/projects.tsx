import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import projectList from "../../../utils/project-list";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "../../ui/carousel";
import Wrapper from "../../wrapper";
import ProjectCard from "./project-card";

const Projects = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<Wrapper className="w-min-48 w-9/12 max-w-screen-xl" id="Projects">
			<h1 className="mb-16 text-center text-5xl font-bold bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(128,0,255,0.4)]">
				Projects
			</h1>
			<Carousel
				setApi={setApi}
				plugins={[
					Autoplay({
						delay: 3000,
						stopOnMouseEnter: true,
					}),
				]}
			>
				<CarouselContent>
					{projectList.map((project, index) => (
						<ProjectCard {...project} key={index} />
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="mt-6 text-center text-xl text-muted-foreground">
				Slide {current} of {count}
			</div>
		</Wrapper>
	);
};

export default Projects;
