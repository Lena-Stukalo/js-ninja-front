import { Logo } from "./logo/Logo"
import { useState } from "react";
import css from'./Header.module.css'
export function Header( ){
  const [color, setColor]=useState(false)
  const cangeColor=()=>{
    if (window.scrollY>70){
      setColor(true)
    }else{
      setColor(false)
    }
  }
window.addEventListener("scroll",cangeColor)
    return <header className={`${css.header} ${color?css.headerBg:''}`} >
     <Logo/>
      
   </header>
   }