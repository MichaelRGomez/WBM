import placeholder from '/placeholder.png'

export default function Project({mediaHeight, splashWidth}){
    return(
        <>
        The other meat of the website
        <div>
            <img src={placeholder} alt="place holder image" style={{width: splashWidth}}/>
            <span>
                <p>Start Date</p>
                <p>Last Worked on</p>
                <p>Completion</p>
            </span>
            <p>Description of the Project</p>
        </div>
        
        <div>
            Related Art
            <div> {/*Art Post*/}
                <p>Title</p>
                <div>
                    <img src={placeholder} alt="place holder image" style={{height: mediaHeight}}/>
                </div>
                <p>05/04/2024</p>
                <p>Words related to Media</p>
            </div>
        </div>
        </>
    )
}