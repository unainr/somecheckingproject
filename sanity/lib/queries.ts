import { defineQuery } from "next-sanity";

export const PROJECT_FETCH_QUERY =
	defineQuery(`*[_type == "project"] | order(_createdAt desc) {
  _id, 
  name, 
  description,
  projecttLink,
  "images": images[].asset->url, 
}

`);

