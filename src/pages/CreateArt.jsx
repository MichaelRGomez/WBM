export default function CreateArt(){
    return(
        <>
        creating the meat of the website
        <form>
          <label>Art:</label>
          <br/>
          <div>
            Art preview of art about to being uploaded
          </div>
          <input type="file"/>
          <br/>
          <label>Type:</label>
          <select>
            <option>Normal</option>
            <option>Project</option>
          </select>
          <br/>
          <label>Title:</label>
          <input type="text"/>
          <br/>
          <label>Date:</label>
          <input type="date"/>
          <br/>
          <label>Words:</label>
          <textarea/>
          <br/>
          <button type="submit">Create </button>
        </form>
        </>
    )
}