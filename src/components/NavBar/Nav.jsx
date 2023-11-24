import style from "./Nav.module.css"
import logo from "../../img/logo.png"
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5"
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

function Nav() {
  return (
    <header className={style.header}> 
    <div className={style.navBar}>
        <div className={style.logo}>
          <img src={logo}></img>
        </div>
        <div className={style.navList}>
          <ul>
            <li className={style.item}><a href="#"><FaSearch/></a></li>
            <li className={style.item}><a href="#"><IoPersonCircleSharp /></a></li>
            <li className={style.item}><a href="#"><FaHeart/></a></li>
            <li className={style.item}><a href="#"><IoBagHandle/></a></li>
          </ul>
          
        </div>
      </div>
      </header>
  )
}

export default Nav