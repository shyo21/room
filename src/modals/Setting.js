import './Style.css';
import icon from '../etc/Helloworld_icon.svg';
import {ReactComponent as Rocket} from '../etc/helloworld_rocket.svg';
import {ReactComponent as Music} from '../etc/helloworld_music.svg';
import {ReactComponent as Star} from '../etc/helloworld_star.svg';
import {useState} from 'react';
import {ReactComponent as Yes} from '../etc/icon_yes.svg';


function Screen(props) {

    const [githubLink, setgithubLink] = useState(localStorage.getItem('githubLink'));
    const [picshortLink, setpicshortLink] = useState(localStorage.getItem('picshortLink'));
    const [piclongLink, setpiclongLink] = useState(localStorage.getItem('piclongLink'));

    const [music1, setmusic1] = useState(localStorage.getItem('music1'));
    const [music2, setmusic2] = useState(localStorage.getItem('music2'));
    const [music3, setmusic3] = useState(localStorage.getItem('music3'));


    const updateLink = () => {
        localStorage.setItem('githubLink',githubLink);
        localStorage.setItem('picshortLink',picshortLink);
        localStorage.setItem('piclongLink',piclongLink);
    }

    const updateMusic = () =>{
        localStorage.setItem('music1',music1 );
        localStorage.setItem('music2',music2 );
        localStorage.setItem('music3',music3 );

    }


    switch(props.setting){
        case 1:
            return(
                <div className="screenWrapper">
                    <div className="screenTitle">PHYSICS</div>
                    <div className="screen">

                    </div>
                </div>
            );
        case 2:
            return(
                <div className="screenWrapper">
                    <div className="screenTitle">MUSIC</div>

                    <div className="screen">
                        <input
                            className ="linkInput"
                            value={music1}
                            onChange={(e)=>setmusic1(e.target.value)}
                        />
                        <input
                            className ="linkInput"
                            value={music2}
                            onChange={(e)=>setmusic2(e.target.value)}
                        />
                        <input
                            className ="linkInput"
                            value={music3}
                            onChange={(e)=>setmusic3(e.target.value)}
                        />
                        <div className="applyButton" onClick={()=>updateLink()}>
                            <Yes style={{margin : '0.3vh'}} fill="#ffffff"/>
                        </div>

                    </div>
                </div>
            );
        case 3:
            return(
                <div className="screenWrapper">
                    <div className="screenTitle">BOOKMARK</div>
                    <div className="screen">
                        <input
                            className ="linkInput"
                            value={githubLink}
                            onChange={(e)=>setgithubLink(e.target.value)}
                        />
                        <input
                            className ="linkInput"
                            value={picshortLink}
                            onChange={(e)=>setpicshortLink(e.target.value)}
                        />
                        <input
                            className ="linkInput"
                            value={piclongLink}
                            onChange={(e)=>setpiclongLink(e.target.value)}
                        />
                        <div className="applyButton" onClick={()=>updateLink()}>
                            <Yes style={{margin : '0.3vh'}} fill="#ffffff"/>
                        </div>

                    </div>
                </div>
            );
    }
}



const Setting = (props) => {

    const [setting, setSetting] = useState(0);

    return(
        <div>
            <div className="iconWrapper">
                <img className="icon" src={icon} onClick={()=>setSetting(val=>Number(!val))} />
            </div>
            {setting &&
                <div className={"settingModal" + (setting?"":" empty")}>
                    <div className="tabbar">
                        <div className="tabicon">
                            <Rocket onClick={()=>setSetting(1)} fill={(setting===1)?"#555555":"#dddddd"}/>
                        </div>
                        <div className="tabicon">
                            <Music  onClick={()=>setSetting(2)} fill={(setting===2)?"#555555":"#dddddd"} />
                        </div>
                        <div className="tabicon">
                            <Star onClick={()=>setSetting(3)} fill={(setting===3)?"#555555":"#dddddd"} />
                        </div>
                    </div>
                    <div className = "settingScreen">
                        <Screen 
                        setting={setting} 
                        setPhysics={props.setPhysics}
                        physics={props.physics} />
                    </div>
                </div>
            }

        </div>

    );
}

export default Setting;