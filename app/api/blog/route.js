import { connectToDB } from "@utils/database";
import Blog from "@models/blog";

// GET request handler
export const GET = async (req) => {
    try {
        await connectToDB();
        const blogs = await Blog.find();
        if (!blogs.length) {
            return new Response(JSON.stringify({ message: "Blogs not found" }), { status: 404 });
        }
        return new Response(JSON.stringify(blogs), { status: 200 });
    } catch (error) {
        console.error("Error fetching blogs", error);
        return new Response(JSON.stringify({ message: "Error fetching blogs" }), { status: 500 });
    }
};

// POST request handler
export const POST = async (req) => {
    const { title, imageUrl, content } = await req.json();
    try {
        await connectToDB();
        const blog = new Blog({
            title: title, 
            imageUrl: imageUrl, 
            content: content
        });
        await blog.save();

        if (!blog) {
            return new Response(JSON.stringify({ message: "Failed to create blog" }), { status: 404 });
        }
        return new Response(JSON.stringify({ message: "Blog created successfully" }), { status: 200 });
    } catch (error) {
        console.error("Error creating blog", error);
        return new Response(JSON.stringify({ message: "Error creating blog" }), { status: 500 });
    }
};
