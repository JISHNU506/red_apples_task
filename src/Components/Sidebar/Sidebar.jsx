import React, { useState } from 'react'
import "./Sidebar.css";
import {Dashboard,Logout,Layers,Groups,CalendarViewMonthRounded,Email,Person,TurnedIn} from '@mui/icons-material';

export default function Sidebar() {
    const [isExpanded,setExpandedState]=useState(false)
    const menuitems=[
        {
                text:"Dashboard",
                icon:<Dashboard/>,
                link:"/Dashboard"
        },
        {
                text:"My Classes",
                icon:<Layers/>
        },
        {
                text:"My Classroom",
                icon:<Groups/>
        },
        {
                text:"Calender",
                icon:<CalendarViewMonthRounded/>
        },
        {
                text:"Mail Box",
                icon:<Email/>
        },
        {
                text:"Saved",
                icon:<TurnedIn/>
        },
        {
                text:"My Profile",
                icon:<Person/>
        },
        {
                text:"Logout",
                style:{
                    border:"black"
                },
                icon:<Logout/>
        }
    ]
  return (
    <>
     <div className={isExpanded?'side-nav-container':'side-nav-container side-nav-container-NX'}>
        <div className='nav-upper'>
           <div className='nav-heading'>
       { isExpanded &&  ( <div className='nav-brand'>
                &nbsp;&nbsp;&nbsp;
                <h2 >showkart</h2>

            </div>)}
            <button className={isExpanded?'hamburger hamburger-in ':'hamburger hamburger-out'} onClick={()=>setExpandedState(!isExpanded)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
           </div>
           <div className="nav-menu">
            {
                menuitems.map(({text,link,icon})=>(
                    <a href={link}className={isExpanded?"menu-item":"menu-item menu-item-NX"}>
                        <div className='icn'>{icon}</div>
                       
                       { isExpanded && <p  className="sing">{text}</p>}
                      
                      { !isExpanded && <div className="tooltipside">{text}</div>}
                    </a>
                ))
            }
           </div>

        </div>
        <div className="nav-footer">
           { isExpanded && (<div className="nav-details">
                <img src="" alt="" />

            </div>)}
        </div>
        
    </div>
    </>
  )
}
