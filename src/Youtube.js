import React, {useState} from 'react';
import YouTube from 'react-youtube';

function Youtube() {
    const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=WO_AGLzVgmw&t=493s");
    let videoCode;
    if (videoUrl) {
        videoCode = videoUrl.split("v=")[1].split("&")[0];
    }

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
