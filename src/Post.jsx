import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Buffer from 'buffer';

export default function Post() {
    const [post, setPost] = useState(null);
    const [media, setMedia] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/post/1")
            .then(response => {
                setPost(response.data);
                const file = response.data.path;
                const type = response.data.type;

                let mediaFolder;

                switch (type) {
                    case ".png":
                    case ".jpg":
                    case ".jpeg":
                        mediaFolder = "image";
                        break;
                    case ".gif":
                        mediaFolder = "gif";
                        break;
                    case ".mp4":
                        mediaFolder = "video";
                        break;
                    default:
                        return;
                }

                axios.get(`http://localhost:3001/${mediaFolder}/${file}`, { responseType: 'arraybuffer' })
                    .then(response => {
                        const base64 = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
                        setMedia(`data:${response.headers['content-type'].toLowerCase()};base64,${base64}`);
                    })
                    .catch(error => {
                        console.error("Error fetching media data:", error);
                    });
            })
            .catch(error => {
                console.error("Error fetching post data:", error);
            });
    }, []);

    return (
        <>
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    {media && (
                        media.startsWith('data:image') ? (
                            <img src={media} alt={post.alt} />
                        ) : (
                            <video controls>
                                <source src={media} type="video/mp4" />
                            </video>
                        )
                    )}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}
