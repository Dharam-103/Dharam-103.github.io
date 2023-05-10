import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ButtonTop = () => {
    const[scrollTopButton,setScrollButton]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
             if(window.scrollY>400){
                setScrollButton(true)
             }else{
                setScrollButton(false)
             }
        })
    },[])

    const scrollTop=()=>{
        window.scrollTo({
            top:"12vh",
            behavior:"smooth"
        })
    }

    const styles={
        position:"fixed",
        bottom:"50px",
        right:"50px",
        fontSize:"50px",
        backgroundColor:"#2F58CD",
        color:"white",
        borderRadius:"50%",
        border:"none",
        cursor:"pointer"
    }

  return (
    <div>
        {
            scrollTopButton && (<button style={styles} onClick={scrollTop}><AiOutlineArrowUp/></button>)
        }
          
    </div>
  )
}

export default ButtonTop;