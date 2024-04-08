import placeHolder from '/placeholder.png'

export default function Projects({miniSplashHeight}){
    
    const exampleList = [
        {
            project: "Coven",
            miniSplash: placeHolder,
            splashPath: "",
            startDate: "",
            lastDate: "",
            endDate: "",
            description: "some words describing the thing",
        },
    ]
    
    return(
        <>
            List of the the other meat of the website
            <div>
                <h3> {exampleList[0].project}</h3>
                <img src={exampleList[0].miniSplash} alt="place holder image" style={{height: miniSplashHeight}}/>
                <p> {exampleList[0].description}</p>
                <button> View </button>
            </div>
        </>
    )   
}