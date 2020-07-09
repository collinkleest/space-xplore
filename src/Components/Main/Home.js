import React from 'react';
export default function Home(props){
    return(
        <div>
            <h1 className="home-title">
                Welcome to SPACE XPLORE !
            </h1>
            <p style={{textAlign: 'center'}} >
                <iframe src="https://i.gifer.com/PSc.gif" 
                width="480" 
                height="480" 
                frameBorder="0" 
                allowFullScreen
                />
            </p>
        </div>
    )
}