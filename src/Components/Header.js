import React from "react"
import { Link, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Header.css"

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="HeaderStyle">
            {/* <img src="https://marketplace.canva.com/EAEz1ubW610/1/0/1600w/canva-black-and-gold-vintage-restaurant-logo-oEbXKiQo_co.jpg" alt="image"/> */}
            <div className="leftStyle">
                <img src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-restaurant-logo-png-image_7932128.png" alt="imgae" onClick={() => navigate("/")} />
            </div>
            <div className="rightStyle">
                <Link to="/">Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <AccountCircleOutlinedIcon
                    style={{ cursor: "pointer", fontSize: 30, margin: "20px", color: "white" }}
                    onClick={() => navigate("/Login")}
                />
            </div>
        </div>
    )
}
export default Header;