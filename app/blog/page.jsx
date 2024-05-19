"use client"

import { useState} from "react";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setIsLoading(true)
    try{
      const response = await fetch("/api/blog",{
        method: "POST",
        body: JSON.stringify({
          title: title, 
          imageUrl:imageUrl,
          content: content
        }),
        headers:{
          "content-type": "application/json"
        }
      })
      if(response.ok){
        setSuccessMessage("Blog created successfully!!");
        setTitle("");
        setImageUrl("");
        setContent("");
        setTimeout(()=>setSuccessMessage(""), 3000)
        router.push("/");
      }
    }catch(error){
      setErrorMessage("Failed to create blog!!");
      setTimeout(()=>setErrorMessage(""), 3000);
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-3 flex flex-col justify-center gap-4">
    <h1 className="text-yellow-500 text-2xl text-center">Create Your Blog Post</h1>
    <form className="flex flex-col font-poppins gap-2 glassmorphism" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-slate-700 font-semibold">Title: </label>
        <input placeholder="Enter the title of your blog" className="border-2  border-gray-500 rounded-md p-2" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-slate-700 font-semibold">Image Url: </label>
        <input placeholder="Enter the image url of your blog picture" className="border-2 border-gray-500 rounded-md p-2" required value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg text-slate-700 font-semibold">Content: </label>
        <textarea placeholder="Enter the blog content" className="border-2 border-gray-500 rounded-md p-2" required value={content} onChange={(e)=>setContent(e.target.value)}/>
      </div>
      <div className="flex items-center justify-center">
      <button className="w-fit p-2 mt-2 bg-blue-500 rounded-md hover:bg-blue-400 hover:border-2 hover:border-blue-500 text-white font-semibold">{isLoading ? "Submitting..." : "Submit"}</button>
      </div>
      <div className="flex flex-col gap-2 w-fit">
        {errorMessage && <p className="rounded-md p-2 w-full border-2 border-red-500 text-red-500 bg-red-300 text-sm font-semibold">{errorMessage}</p>}
        {successMessage && <p className="rounded-md p-2 w-full border-2 border-blue-500 text-blue-500 bg-blue-300 text-sm font-semibold">{successMessage}</p>}
      </div>
    </form>
    </section>
  )
}

export default Blog