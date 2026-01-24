import { blogs } from "@/data/blogs-data";
import AllButton from "../custom-ui/AllButton";
import BlogCard from "../blog/BlogCard";

export default function BlogSection() {
	return (
		<section className="py-12 sm:py-20 relative px-4">
			<div className="w-full max-w-7xl mx-auto">
				<div className="mb-8 flex items-center justify-between gap-4">
					<h2 className="h2">Latest Blog Posts</h2>
					<AllButton label="View All" variant={"link"} href="/" />
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{blogs.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</section>
	);
}
