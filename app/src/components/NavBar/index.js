import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  
  const navigate = useNavigate();

  const homenav = () => {
    navigate("/home");
  };
  const willnav = () => {
    navigate("/will");
  };
    const imagenav = () => {
    navigate("/will/images");
  };
    const willapinav = () => {
    navigate("/will/api");
  }
  return (
    <div className='navBar'>

                <div class="header-buttons">
                <div class="header-button" onClick={homenav}> Home</div>
                <div class="header-button" onClick={willnav}>William's Page</div>
                <div class="header-button" onClick={willapinav}>Api Calling</div>
                <div class="header-button" onClick={imagenav}>Images</div>
                </div> 
    </div>
  );
};


export default Navbar;
