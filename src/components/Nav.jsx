export default function Nav(){
    return(
    <div className="
    bg-black 
    text-white 
    p-2
    grid
    grid-cols-3
    items-end
    ">
        <h1 className="text-2xl">
            <a class="hover:text-red-400" href="/Home">Otaku Reaper</a>
        </h1>

        <nav className="
        grid 
        grid-cols-6 
        col-span-2
        text-base
        gap-2">
            <a class="hover:text-red-400" href={`/Home`} >Home</a>
            <a class="hover:text-red-400"  href={`/Posts`} >Posts</a>
            <a class="hover:text-red-400"  href={`/Project/List`} >Projects</a>
            <a class="hover:text-red-400"  href={`/Post/Create`}> Create Art</a>
            <a class="hover:text-red-400"  href={`/Project/Create`}>Create Project</a>
            <a class="hover:text-red-400"  href={`/Contact`} >Contact</a>
        </nav>
    </div>
    );
}