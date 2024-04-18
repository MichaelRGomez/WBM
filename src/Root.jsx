import { Outlet } from "react-router-dom"

export default function Root() {
    return(
        <>
            <div className="
            bg-black 
            text-white 
            p-4
            
            grid
            grid-cols-3
            gap-4
            ">
                <h1 className="
                tracking-widest 
                text-4xl
                
                col-span-1
                ">
                    <a className="hover:text-red-500"
                    href="/">Otaku Reaper</a>
                </h1>

                <nav className="
                    col-span-2

                    grid
                    grid-cols-4
                    gap-2

                    items-end

                    text-lg
                    tracking-wide
                ">
                    <a className="hover:text-red-500 hover:underline"
                        href={'/post'}
                    > Posts </a>
                    <a className="hover:text-red-500 hover:underline"
                        href={'/post'}
                    > Projects </a>
                    <a className="hover:text-red-500 hover:underline"
                        href={'/post'}
                    > Contact </a>
                    <a className="hover:text-red-500 hover:underline"
                        href={'/post'}
                    > About </a>
                </nav>
            </div>

            <div className="p-2 mx-4">
                <Outlet />
            </div>
        </>
    )
}