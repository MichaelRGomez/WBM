import { Outlet } from "react-router-dom"

export default function Root(){
    return (
        <>
            <h1>Website header text</h1>

            <nav>
                <a href={`/App`} >Home</a>
                <a href={`/Posts`} >Posts</a>
                <a href={`/Project/List`} >Projects</a>
                <a href={`/Post/Create`}> Create Art</a>
                <a href={`/Project/Create`}>Create Project</a>
                <a href={`/Contact`} >Contact</a>
            </nav>

            <div id="detail">
                <Outlet/>
            </div>
        </>
    )
}