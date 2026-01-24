import { Dot } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Blog } from "@/data/blogs-data";

export default function BlogCard({ blog }: { blog: Blog }) {
	return (
		<Card className="p-0 overflow-hidden gap-0 border-none transition group">
			<div className="relative aspect-6/4 rounded-xl overflow-hidden">
				<img
					src={blog.image}
					alt={blog.title}
					className="w-full aspect-6/4 object-cover group hover:scale-105 transition"
				/>

				<Badge variant={"secondary"} className="absolute left-4 top-4 rounded-full px-4 py-1.5">
					{blog.category}
				</Badge>
			</div>

			<CardHeader className="my-4 p-0 gap-0.5">
				<div className="flex items-center text-xs">
					<span>{blog.author}</span>
					<Dot />
					<span>{Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(blog.date))}</span>
				</div>
				<CardTitle className="line-clamp-2 text-base group-hover:underline">{blog.title}</CardTitle>
			</CardHeader>
		</Card>
	);
}
