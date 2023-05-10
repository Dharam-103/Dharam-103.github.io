import React from 'react';
import { tool } from '../logo/logo';
import "../Styles/tool.css";
const tool_arr=[
    {path:`${tool.vscode}`,text:"Vc Code"},
    {path:`${tool.Github}`,text:"Github"},
    {path:`${tool.Git}`,text:"Git"},
    {path:`${tool.Atlas}`,text:"MongoDB Atlas"},
    {path:`${tool.npm}`,text:"NPM"},
    {path:`${tool.netlify}`,text:"Netlify"},
    {path:`${tool.postman}`,text:"Postman"},
    {path:`${tool.render}`,text:"Render"},
]
const Tool = () => {

  return (
      <div className="tool-section">
           <h1 className='tool-heading'>Tools</h1>
           <div className='tool-main'>
              {
                tool_arr.map((el)=>{
                    return <div className='tool-each-div'>
                         <img src={el.path} alt="tool" className='tool-image'/>
                         <h2 className='tool-text'>{el.text}</h2>
                    </div>
                })
              }
           </div>
      </div>
  )
}

export default Tool;