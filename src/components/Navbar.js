// import React, { useState } from "react";
// import "../styles/navbar.css";
// import logo from "../assets/birdmytrip_no_bg.png";

// export default function Navbar() {

//   const [open, setOpen] = useState(false);

//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src={logo} alt="logo" className="logo-img" />
//       </div>

//       <div className="nav-center">
//         <a href="#myPartnerSection">WHY MYPARTNER?</a>
//         <a href="#productHighlights">PRODUCT HIGHLIGHTS</a>
//       </div>

//       <div className="nav-right">
//         <button className="login-btn">LOGIN</button>

//         {/* 👇 UPDATED CURRENCY DROPDOWN */}
//         <div className="currency-wrapper">
//           <div 
//             className="currency"
//             onClick={() => setOpen(!open)}
//           >
//             🇮🇳 IND | INR
//           </div>

//           {open && (
//             <div className="currency-dropdown">
//               <div className="currency-item active">🇮🇳 India</div>
//               <div className="currency-item">🇦🇪 UAE</div>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/birdmytrip_no_bg.png";

export default function Navbar({ country, setCountry }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>

      <div className="nav-center">
        <a href="#myPartnerSection">WHY MYPARTNER?</a>
        <a href="#productHighlights">PRODUCT HIGHLIGHTS</a>
      </div>

      <div className="nav-right">
        <button className="login-btn">LOGIN</button>

        {/* 👇 UPDATED CURRENCY DROPDOWN */}
        <div className="currency-wrapper">
          <div 
            className="currency"
            onClick={() => setOpen(!open)}
          >
            {/* ✅ DYNAMIC TEXT */}
            {country === "IN" ? "🇮🇳 IND | INR" : "🇦🇪 UAE | AED"}
          </div>

          {open && (
            <div className="currency-dropdown">

              {/* ✅ CLICK HANDLER */}
              <div 
                className="currency-item"
                onClick={() => {
                  setCountry("IN");
                  setOpen(false);
                }}
              >
                🇮🇳 India
              </div>

              <div 
                className="currency-item"
                onClick={() => {
                  setCountry("AE");
                  setOpen(false);
                }}
              >
                🇦🇪 UAE
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}