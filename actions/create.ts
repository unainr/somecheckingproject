"use server";

import prisma from "@/lib/prisma";
import {z} from "zod";
const schema = z.object({
	name: z.string().min(1),
	description: z.string().min(1),
	message: z.string().min(1),
});
export async function create(formData: FormData) {
	const validation = schema.safeParse({
		name: formData.get("name"),
		description: formData.get("description"),
		message: formData.get("message"),
	});
	
	const name = formData.get("name") as string;
	const description = formData.get("description") as string;
	const message = formData.get("message") as string;
	if (!name || !description || !message) {
		throw new Error("All fields are required");
	}

	await prisma.item.create({
		data: {
			name,
			description,
			message,
		},
	});
}
