import React from 'react';

const Footer = () => {

    const styles={
         backgroundColor:"teal",
         height:"80px",
         marginTop:"10px",
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         color:"white",
         textAlign:"center"
         
    }

  return (
    <div>
        <p style={styles}>@ Copyright | Designed By Dharmendra Yadav</p>
    </div>
  )
}

export default Footer;