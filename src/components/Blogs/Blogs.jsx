import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

//blogs er data load korbo akhane
const Blogs = () => {

    const[blogs,setBlogs]= useState([]);
//dependency empty array
    useEffect(() =>{

        fetch('blogs.json')
        .then (res=>res.json())
        .then(data =>setBlogs(data))

    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog  
                    key={blog.id} 
                    blog={blog}
                ></Blog>)
            }

        </div>
    );
};

export default Blogs;