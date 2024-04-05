export default function CreateProject(){
    return(
        <>
        creating the other meat of the website
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
            <option>Exploratory</option>
            <option>Serious</option>
          </select>
          <br/>
          <label>Project Name:</label>
          <input type="text"/>
          <br/>
          <label>Start Date:</label>
          <input type="date"/>
          <br/>
          <label>Description:</label>
          <textarea/>
          <br/>
          <button type="submit">Create </button>
        </form>
        </>
    )
}