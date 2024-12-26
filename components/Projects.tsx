import React from "react";

interface Project {
	name: string;
	description: string;
	images: string[];
	projecttLink: string;
}
export function Projects({ project }: { project: Project }) {
	const { name, description, images, projecttLink } = project;

	return (
		<section className="py-10 bg-gradient-to-b  ">
			<div className="container mx-auto px-4 max-w-7xl ">
				<div className="group bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-500 border border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-purple-500/30">
					{/* 📸 Image Section */}
					<div className="relative h-64 md:h-72 overflow-hidden">
						<img
							src={images[0]}
							alt={name}
							className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-90" />

						{/* 📌 Project Title Overlay */}
						<div className="absolute bottom-0 left-0 right-0 p-6">
							<h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
								{name}
							</h3>
						</div>
					</div>

					{/* 📝 Content Section */}
					<div className="p-6 flex flex-col justify-between h-60 md:h-64">
						<p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
							{description.length > 120
								? `${description.substring(0, 120)}...`
								: description}
						</p>

						<div className="mt-auto pt-4">
							<a
								href={projecttLink}
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full text-center px-6 py-2.5 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
								Live Demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
