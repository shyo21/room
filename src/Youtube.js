import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';

function Youtube(props) {

    const originlink = "https://www.youtube.com/watch?v=WO_AGLzVgmw&t=493s";
    const origincode = originlink.split("v=")[1].split("&")[0];
    const [videoCode, setVideoCode] = useState(origincode);

    useEffect(()=>{
        if(props.musicClick){
            const videoUrl = localStorage.getItem(`music${props.musicClick}`);
            if(videoUrl){
                setVideoCode(videoUrl.split("v=")[1].split("&")[0]);
            }else{
                setVideoCode(origincode);
            }
        }


    },[props.musicClick])


    const opts = {
        height: 620,
        width: 800,
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
        }
    };

    return (
        <div>
            <div>
            <YouTube
                videoId={videoCode}
                containerClassName="embed embed-youtube"
                opts={opts}
            />
            </div>
        </div>
    );
}

export default Youtube;