function Login(){
    const [login, setLogin] = useState(false);

    let bColor = "red";

    if(login){
        bColor = "green";
    } else {
        bColor = "red";
    }

    function handleClick(){
        if(!login){
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    return(
        <>
            <button onClick={handleClick} style={{color: bColor}}>
                Login
            </button>
        </>
    )
}