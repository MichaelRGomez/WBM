import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

export default function Root(){
    return (
        <>
            <Nav/>

            <div id="detail"
                className="
                    mx-10 mt-3
                ">
                <Outlet/>
            </div>
        </>
    )
}