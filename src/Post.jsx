import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Post() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get("http://192.168.10.115:3001/post/4")
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.error("Error fetching post data:", error);
            });
    }, []);


    let media = null

    if(post){
        if(post.type === '.mp4'){
            media = (
                <video controls style={{maxWidth: "100%", maxHeight:"85vh"}}  > <source src={`http://192.168.10.115:3001/media/${post.path}`} type="video/mp4"/> </video>
            );
        } else {
            media = (
                <img  src={`http://192.168.10.115:3001/media/${post.path}`} style={{maxWidth: "100%"}}/>
            );
        }
    }

    return (
        <div className="
        border-y-4 
        border-black
        py-2
        mx-20
        
        grid
        grid-cols-3
        "
        style={{maxHeight:"90vh"}} >
            {post ? (
                <>
                    <div>
                        <h1 className="py-2 text-4xl font-bold tracking-widest">{post.title}</h1>
                        <p className='text-lg tracking-tight'>{post.description}</p>
                        <p className='text-sm text-gray-400'>{post.date}</p>                    
                    </div>
                    <div className='col-span-2 place-self-center' >{media}</div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
