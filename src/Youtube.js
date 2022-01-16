import React, {useState} from 'react';
import YouTube from 'react-youtube';

function Youtube() {
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=f3j82BsIVbc&list=WL&index=37");
    let videoCode;
    if (videoUrl) {
        videoCode = videoUrl.split("v=")[1].split("&")[0];
    }

    const opts = {
        height: 200,
        width: 400,
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
