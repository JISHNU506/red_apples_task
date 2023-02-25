import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { SearchSharp } from "@mui/icons-material";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar-items">
          <div className="hdr">
            <h3>WELCOME !</h3>
            <h1>DASHBOARD</h1>
          </div>
        
            <div className="navbar-input">
              
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search ?"
                />
              </div>
              <div className="navbar-search">
                <SearchSharp sx={{ fontSize: "35px", paddingTop: "5px" }} />
              </div>
            </div>
        
          <div className="wallet">
            <div className="wlt-icn">
              <h3>
                <i class="fa-solid fa-wallet"></i> Wallet
              </h3>
            </div>
            <div className="bell">
              <h3>
                {" "}
                <i class="fa-solid fa-bell"></i>
              </h3>
            </div>
          </div>
        </div>
        <div onClick={() => setOpen(!open)} className="navbar-ic">
          {!open ? <FaBars /> : <FaTimes />}
       
        {open && (
          <div className="navbar-res">
           
         
              <div className="navbar-input">
               
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search ?"
                  />
                </div>
                <div className="navbar-search">
                  <SearchSharp sx={{ fontSize: "35px", paddingTop: "5px" }} />
                </div>
                
              </div>
              <div className="wallet">
              <div className="wlt-icn">
                <h3>
                  <i class="fa-solid fa-wallet"></i> Wallet
                </h3>
              </div>
              <div className="bell">
                <h3>
                  {" "}
                  <i class="fa-solid fa-bell"></i>
                </h3>
              </div>
            </div>
           
          
          </div>
        )}
      </div>
      </div>
    </>
  );
}
