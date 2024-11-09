import React,{useState} from 'react'
import './Navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
    const [active , setActive] = useState('navBar')
    const showNav=()=>{
        setActive('navBar activeNavbar')
    }

    const removeNav=()=>{
        setActive('navBar')
    }
    return (
        <section className="navBarSection">
        <div className="header">
            <div className="logoDiv">
                <a href="#" className="logo">
              <h1 className='flex'><MdOutlineTravelExplore className="icon"/>

              
              </h1>
                </a>
            </div>
         <div className={active}>
            <ul className = "navlists flex">
              <li className="navItem">
                <a href="#" className="navLink"> Home </a>
                    </li>

                    <li className="navItem">
                <a href="#" className="navLink"> Location </a>
                    </li>


                    <li className="navItem">
                <a href="#" className="navLink"> Price </a>
                    </li>

                    <li className="navItem">
                <a href="#" className="navLink"> Contacts </a>
                    </li>

                    <li className="navItem">
                <a href="#" className="navLink"> Profile </a>
                    </li>

                  <div className="headerBtns flex">
                    <button className='btn loginBtn'>
                        <a href = "#" >/Login</a>
                    </button>
                    <button className='btn'>
                        <a href = "#" >/Sign Up</a>
                    </button>


                  </div>
            </ul>
            <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
                </div>
        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots cassName="icon"/>
        </div>

         </div>
        </div>
        </section>

    )
}

export default Navbar
