import './Style.css';
import logo from '../etc/Helloworld_logo.svg';

const Logo = () => {

    return(
        <div className="logoWrapper">
            <img className="logo" src={logo} />
        </div>
    );
}

export default Logo;