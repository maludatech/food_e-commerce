import { connectToDB } from "@utils/database";
import Blog from "@models/blog";

// GET request handler
export const GET = async (req) => {
    try {
        await connectToDB();
        const blogs = await Blog.find();
        if (!blogs.length) {
            return new Response(JSON.stringify({ message: "Blogs not found" }), { 
                status: 404, 
                headers: { 'Content-Type': 'application/json' }
            });
        }
        return new Response(JSON.stringify(blogs), { 
            status: 200, 
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching blogs", error);
        return new Response(JSON.stringify({ message: "Error fetching blogs" }), { 
            status: 500, 
            headers: { 'Content-Type': 'application/json' }
        });
    }
};


export const POST = async (req) => {
    try {
        const { title, imageUrl, content } = await req.json();
        await connectToDB();
        const blog = new Blog({ title, imageUrl, content });
        await blog.save();
        return new Response(JSON.stringify({ message: "Blog created successfully" }), { 
            status: 200, 
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error creating blog", error);
        return new Response(JSON.stringify({ message: "Error creating blog" }), { 
            status: 500, 
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
