import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import "../Styles/github.css";
const Github = () => {

  return (
    <div>
          <h1 className='calendar'>Github Calendar</h1>
          <div className='github-main'>
             <GitHubCalendar username="Dharam-103" className="react-activity-calendar"/>
          </div>
          <div className='github-div1'>
             <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Dharam-103&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact" alt="lang" id="github-top-langs"/>
          </div>
          <div className='github-div2'>
             <img src="https://github-readme-stats.vercel.app/api?username=Dharam-103&theme=light&hide_border=false&include_all_commits=true&count_private=true" alt="statsCard" id="github-stats-card"/>
          </div>
         <div className='github-div3'>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=Dharam-103" alt="streak"  id="github-streak-stats"/>
         </div>
    </div>
  )
}

export default Github;