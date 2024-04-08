import placeholder from '/placeholder.png'
import world from '/world.gif'
import funny from '/funny.mp4'

export default function Home({mediaHeight}){
    const recentArt = [
        {
            id: 1,
            title: "Some Art",
            type: "png",
            path: placeholder,
            alt: "place holder image",
            date: "05/04/2024",
            description: "Words related to Media"
        },
        {
            id: 2,
            title: "Some Art",
            type:"gif",
            path: world,
            alt: "place holder image",
            date: "05/04/2024",
            description: "Words related to Media"
        },
        {
            id: 3,
            title: "Some Art",
            type: "mp4",
            path: funny,
            alt: "place holder image",
            date: "05/04/2024",
            description: "Words related to Media"
        },
    ]

    const artList = recentArt.map(art =>
        <div> {/*Art Post*/}
            <p>{art.title}</p>
            <div>
                {art.type === "mp4" ? (
                    <video style={{ height: mediaHeight }} controls>
                        <source type="video/mp4" src={art.path} />
                    </video>
                ) : (
                    <img src={art.path} alt={art.alt} style={{ height: mediaHeight }} />
                )}
            </div>
            <p>{art.date}</p>
            <p>{art.description}</p>
        </div>
    );

    return (
        <>
            <h2 className="text-2xl">Recent Art</h2>
            <p> Recently created monstrosities from my imagination </p>
            <hr/>
            <div className="pt-5">
                {artList}
            </div>
        </>
    )
}