import { create } from "@/actions/create";
import { Projects } from "@/components/Projects";
import { client } from "@/sanity/lib/client";
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";


export default async function Home() {
  const projects = await client.fetch(PROJECT_FETCH_QUERY);
  return (
 <>
 {projects?.length > 0 ? (
			<div id="portfolio" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
				{projects.slice(0, 8).map((project: any) => (
					<Projects key={project._id } project={project} />
				))}
			</div>
		) : (
			<p className="no-results text-center text-gray-400">
				No Projects Found
			</p>
		)}
 </>
  );
}
