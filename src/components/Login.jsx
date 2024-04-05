import { useState } from 'react';

export default function Login({ handleClick, bColor}){
    return(
        <>
            <button onClick={handleClick} style={{color: bColor}}>
                Login
            </button>
        </>
    )
}