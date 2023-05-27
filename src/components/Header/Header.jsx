import { Logo } from "./logo/Logo"
import { useState } from "react";
import css from'./Header.module.css'
import Button from "../Button/Button";
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
     <div>
     <Button text={'Add hero'} todo={()=>{}} />
     </div>
      
   </header>
   }