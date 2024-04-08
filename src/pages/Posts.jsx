import placeholder from '/placeholder.png'
import world from '/world.gif'
import funny from '/funny.mp4'

export default function Posts({mediaHeight}){
    return(
        <>
        The meat of the website
        <div> {/*Art Post*/}
          <p>Title</p>
          <div>
            <img src={placeholder} alt="place holder image" style={{height: mediaHeight}}/>
          </div>
          <p>05/04/2024</p>
          <p>Words related to Media</p>
        </div>
        <div> {/*Art Post*/}
          <p>Title</p>
          <div>
            <img src={world} alt="the world spinning" style={{height: mediaHeight}}/>
          </div>
          <p>05/04/2024</p>
          <p>Words related to Media</p>
        </div>
        <div> {/*Art Post*/}
          <p>Title</p>
          <div>
            <video style={{height: mediaHeight}} controls>
              <source type="video/mp4" src={funny}/>
            </video>
          </div>
          <p>05/04/2024</p>
          <p>Words related to Media</p>
        </div>
        </>
    )
}