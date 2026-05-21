// // // // // // import React from "react";
// // // // // // import "../styles/login.css";

// // // // // // export default function LoginCard() {
// // // // // //   return (
// // // // // //     <div className="login-card">
// // // // // //       <h2>Get Started</h2>
// // // // // //       <p>Log in or create an account using your mobile number</p>

// // // // // //       <div className="phone-input">
// // // // // //         <span className="flag">🇮🇳 +91</span>
// // // // // //         <input type="text" placeholder="Enter mobile number" />
// // // // // //       </div>

// // // // // //       <button className="continue-btn">CONTINUE</button>

// // // // // //       <div className="offer-box">
// // // // // //         <span className="offer-tag">SPECIAL OFFER</span>
// // // // // //         <p><b>Earn Promo Cash</b> on Every Booking!</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }















// // // // // import React from "react";
// // // // // import "../styles/login.css";

// // // // // export default function LoginCard({ country }) {

// // // // //   const countryData = {
// // // // //     IN: { flag: "🇮🇳", code: "+91" },
// // // // //     AE: { flag: "🇦🇪", code: "+971" }
// // // // //   };

// // // // //   return (
// // // // //     <div className="login-card">
// // // // //       <h2>Get Started</h2>
// // // // //       <p>Log in or create an account using your mobile number</p>

// // // // //       <div className="phone-input">
// // // // //         <span className="flag">
// // // // //           {countryData[country].flag} {countryData[country].code}
// // // // //         </span>
// // // // //         <input type="text" placeholder="Enter mobile number" />
// // // // //       </div>

// // // // //       <button className="continue-btn">CONTINUE</button>

// // // // //       <div className="offer-box">
// // // // //         <span className="offer-tag">SPECIAL OFFER</span>
// // // // //         <p><b>Earn Promo Cash</b> on Every Booking!</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }





















// // // // import React, { useState } from "react";
// // // // import "../styles/login.css";

// // // // export default function LoginCard({ country }) {

// // // //   const [step, setStep] = useState(1);
// // // //   const [phone, setPhone] = useState("");
// // // //   const [otp, setOtp] = useState("");

// // // //   const countryData = {
// // // //     IN: { flag: "🇮🇳", code: "+91" },
// // // //     AE: { flag: "🇦🇪", code: "+971" }
// // // //   };

// // // //   return (
// // // //     <div className="login-card">
// // // //       <h2>Get Started</h2>

// // // //       {/* ✅ STEP 1 - MOBILE */}
// // // //       {step === 1 && (
// // // //         <>
// // // //           <p>Log in or create an account using your mobile number</p>

// // // //           <div className="phone-input">
// // // //             <span className="flag">
// // // //               {countryData[country]?.flag} {countryData[country]?.code}
// // // //             </span>

// // // //             <input 
// // // //               type="text"
// // // //               placeholder="Enter mobile number"
// // // //               value={phone}
// // // //               onChange={(e) => setPhone(e.target.value)}
// // // //             />
// // // //           </div>

// // // //           <button 
// // // //             className="continue-btn"
// // // //             onClick={() => setStep(2)}
// // // //           >
// // // //             CONTINUE
// // // //           </button>
// // // //         </>
// // // //       )}

// // // //       {/* ✅ STEP 2 - OTP */}
// // // //       {step === 2 && (
// // // //         <>
// // // //           <p>Enter OTP sent to {phone}</p>

// // // //           <input 
// // // //             type="text"
// // // //             placeholder="Enter OTP"
// // // //             value={otp}
// // // //             onChange={(e) => setOtp(e.target.value)}
// // // //           />

// // // //           <button 
// // // //             className="continue-btn"
// // // //             onClick={() => setStep(3)}
// // // //           >
// // // //             VERIFY OTP
// // // //           </button>
// // // //         </>
// // // //       )}

// // // //       {/* ✅ STEP 3 - FORM */}
// // // //       {step === 3 && (
// // // //         <>
// // // //           <p>Complete your profile</p>

// // // //           <input type="text" placeholder="Full Name" />
// // // //           <input type="email" placeholder="Email" />
// // // //           <input type="text" placeholder="Business Name" />

// // // //           <button className="continue-btn">
// // // //             SUBMIT
// // // //           </button>
// // // //         </>
// // // //       )}

// // // //       {/* ✅ OFFER BOX SAME RAHEGA */}
// // // //       <div className="offer-box">
// // // //         <span className="offer-tag">SPECIAL OFFER</span>
// // // //         <p><b>Earn Promo Cash</b> on Every Booking!</p>
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }





















// // // import React, { useState, useRef, useEffect } from "react";
// // // import "../styles/login.css";

// // // export default function LoginCard({ country }) {

// // //   const [step, setStep] = useState(1);
// // //   const [phone, setPhone] = useState("");
// // //   const [showForm, setShowForm] = useState(false);
// // //   const [timer, setTimer] = useState(30);

// // //   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
// // //   const inputsRef = useRef([]);

// // //   const countryData = {
// // //     IN: { flag: "🇮🇳", code: "+91" },
// // //     AE: { flag: "🇦🇪", code: "+971" }
// // //   };

// // //   // ⏱ TIMER
// // //   useEffect(() => {
// // //     if (step === 2 && timer > 0) {
// // //       const interval = setInterval(() => setTimer(t => t - 1), 1000);
// // //       return () => clearInterval(interval);
// // //     }
// // //   }, [step, timer]);

// // //   // 🔢 OTP INPUT HANDLE
// // //   const handleOtpChange = (value, index) => {
// // //     if (!/^[0-9]?$/.test(value)) return;

// // //     const newOtp = [...otp];
// // //     newOtp[index] = value;
// // //     setOtp(newOtp);

// // //     if (value && index < 5) {
// // //       inputsRef.current[index + 1].focus();
// // //     }
// // //   };

// // //   const handleBackspace = (e, index) => {
// // //     if (e.key === "Backspace" && !otp[index] && index > 0) {
// // //       inputsRef.current[index - 1].focus();
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <div className="login-card">
// // //         <h2>Get Started</h2>

// // //         {/* STEP 1 */}
// // //         {step === 1 && (
// // //           <>
// // //             <p>Log in or create an account using your mobile number</p>

// // //             <div className="phone-input">
// // //               <span className="flag">
// // //                 {countryData[country]?.flag} {countryData[country]?.code}
// // //               </span>

// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter mobile number"
// // //                 value={phone}
// // //                 onChange={(e) => setPhone(e.target.value)}
// // //               />
// // //             </div>

// // //             <button
// // //               className="continue-btn"
// // //               disabled={phone.length < 8}
// // //               onClick={() => {
// // //                 setStep(2);
// // //                 setTimer(30);
// // //               }}
// // //             >
// // //               CONTINUE
// // //             </button>
// // //           </>
// // //         )}

// // //         {/* STEP 2 - OTP */}
// // //         {step === 2 && (
// // //           <>
// // //             <p>Enter OTP sent to {phone}</p>

// // //             <div className="otp-container">
// // //               {otp.map((digit, i) => (
// // //                 <input
// // //                   key={i}
// // //                   maxLength="1"
// // //                   value={digit}
// // //                   ref={(el) => (inputsRef.current[i] = el)}
// // //                   onChange={(e) => handleOtpChange(e.target.value, i)}
// // //                   onKeyDown={(e) => handleBackspace(e, i)}
// // //                 />
// // //               ))}
// // //             </div>

// // //             <div className="otp-actions">
// // //               {timer > 0 ? (
// // //                 <span>Resend in {timer}s</span>
// // //               ) : (
// // //                 <button onClick={() => setTimer(30)}>Resend OTP</button>
// // //               )}
// // //             </div>

// // //             <div className="otp-buttons">
// // //               <button onClick={() => setStep(1)}>EDIT NUMBER</button>

// // //               <button
// // //                 className="continue-btn"
// // //                 onClick={() => setShowForm(true)}
// // //               >
// // //                 VERIFY OTP
// // //               </button>
// // //             </div>
// // //           </>
// // //         )}

// // //         <div className="offer-box">
// // //           <span className="offer-tag">SPECIAL OFFER</span>
// // //           <p><b>Earn Promo Cash</b> on Every Booking!</p>
// // //         </div>
// // //       </div>

// // //       {/* FULL SCREEN FORM */}
// // //       {showForm && (
// // //         <div className="register-overlay">
// // //           <div className="register-container">

// // //             <button
// // //               className="close-btn"
// // //               onClick={() => setShowForm(false)}
// // //             >
// // //               ✖
// // //             </button>

// // //             <h2>Complete Your Profile</h2>

// // //             <div className="form-grid">

// // //               <input type="text" placeholder="Full Name" required />
// // //               <input type="email" placeholder="Email ID" required />
// // //               <input type="text" placeholder="Mobile Number" value={phone} readOnly />

// // //               <input type="text" placeholder="Agency Name" required />
// // //               <input type="text" placeholder="City" required />
// // //               <input type="text" placeholder="State" required />

// // //               <input type="text" placeholder="PAN Number" required />
// // //               <input type="text" placeholder="GST Number (Optional)" />

// // //               <input type="text" placeholder="Address" required />

// // //             </div>

// // //             <button className="submit-btn">
// // //               SUBMIT
// // //             </button>

// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }















// // import React, { useState, useRef, useEffect } from "react";
// // import "../styles/login.css";

// // export default function LoginCard({ country }) {

// //   const [step, setStep] = useState(1);
// //   const [phone, setPhone] = useState("");
// //   const [showForm, setShowForm] = useState(false);
// //   const [success, setSuccess] = useState(false);

// //   const [timer, setTimer] = useState(30);
// //   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
// //   const inputsRef = useRef([]);

// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     agency: "",
// //     state: "",
// //     city: "",
// //     pan: "",
// //     gst: "",
// //     address: "",
// //     file: null
// //   });

// //   const countryData = {
// //     IN: { flag: "🇮🇳", code: "+91" },
// //     AE: { flag: "🇦🇪", code: "+971" }
// //   };

// //   const states = ["Haryana", "Delhi", "Punjab"];
// //   const cities = {
// //     Haryana: ["Gurgaon", "Faridabad"],
// //     Delhi: ["New Delhi"],
// //     Punjab: ["Amritsar", "Ludhiana"]
// //   };

// //   // TIMER
// //   useEffect(() => {
// //     if (step === 2 && timer > 0) {
// //       const i = setInterval(() => setTimer(t => t - 1), 1000);
// //       return () => clearInterval(i);
// //     }
// //   }, [step, timer]);

// //   // OTP
// //   const handleOtpChange = (value, index) => {
// //     if (!/^[0-9]?$/.test(value)) return;
// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp);
// //     if (value && index < 5) inputsRef.current[index + 1].focus();
// //   };

// //   const handleBackspace = (e, index) => {
// //     if (e.key === "Backspace" && !otp[index] && index > 0) {
// //       inputsRef.current[index - 1].focus();
// //     }
// //   };

// //   // FORM
// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   // PAN VALIDATION
// //   const isValidPAN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

// //   const handleSubmit = () => {
// //     if (!form.name || !form.email || !form.pan) {
// //       alert("Please fill required fields");
// //       return;
// //     }

// //     if (!isValidPAN.test(form.pan)) {
// //       alert("Invalid PAN Number");
// //       return;
// //     }

// //     setSuccess(true);
// //   };

// //   return (
// //     <>
// //       <div className="login-card">
// //         <h2>Get Started</h2>

// //         {/* STEP 1 */}
// //         {step === 1 && (
// //           <>
// //             <p>Log in using mobile number</p>

// //             <div className="phone-input">
// //               <span className="flag">
// //                 {countryData[country]?.flag} {countryData[country]?.code}
// //               </span>

// //               <input
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //                 placeholder="Enter mobile number"
// //               />
// //             </div>

// //             <button onClick={() => { setStep(2); setTimer(30); }}>
// //               CONTINUE
// //             </button>
// //           </>
// //         )}

// //         {/* OTP */}
// //         {step === 2 && (
// //           <>
// //             <p>OTP sent to {phone}</p>

// //             <div className="otp-container">
// //               {otp.map((d, i) => (
// //                 <input
// //                   key={i}
// //                   maxLength="1"
// //                   value={d}
// //                   ref={(el) => (inputsRef.current[i] = el)}
// //                   onChange={(e) => handleOtpChange(e.target.value, i)}
// //                   onKeyDown={(e) => handleBackspace(e, i)}
// //                 />
// //               ))}
// //             </div>

// //             <p>{timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}</p>

// //             <button onClick={() => setShowForm(true)}>
// //               VERIFY
// //             </button>
// //           </>
// //         )}
// //       </div>

// //       {/* FORM */}
// //       {showForm && !success && (
// //         <div className="register-overlay">
// //           <div className="register-container">

// //             <h2>Complete Profile</h2>

// //             <div className="form-grid">
// //               <input name="name" onChange={handleChange} placeholder="Full Name" />
// //               <input name="email" onChange={handleChange} placeholder="Email" />

// //               <input value={phone} readOnly />

// //               <input name="agency" onChange={handleChange} placeholder="Agency" />

// //               {/* STATE */}
// //               <select name="state" onChange={handleChange}>
// //                 <option>Select State</option>
// //                 {states.map(s => <option key={s}>{s}</option>)}
// //               </select>

// //               {/* CITY */}
// //               <select name="city" onChange={handleChange}>
// //                 <option>Select City</option>
// //                 {cities[form.state]?.map(c => <option key={c}>{c}</option>)}
// //               </select>

// //               <input name="pan" onChange={handleChange} placeholder="PAN" />
// //               <input name="gst" onChange={handleChange} placeholder="GST" />

// //               <input name="address" onChange={handleChange} placeholder="Address" />

// //               {/* FILE */}
// //               <input 
// //                 type="file"
// //                 onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
// //               />
// //             </div>

// //             <button onClick={handleSubmit}>SUBMIT</button>

// //           </div>
// //         </div>
// //       )}

// //       {/* SUCCESS */}
// //       {success && (
// //         <div className="register-overlay">
// //           <div className="register-container">
// //             <h2>🎉 Registration Successful</h2>
// //             <p>Welcome to MyPartner</p>
// //             <button onClick={() => setShowForm(false)}>Close</button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }




















// import React, { useState, useRef, useEffect } from "react";
// import "../styles/login.css";

// export default function LoginCard({ country }) {

//   const [step, setStep] = useState(1);
//   const [phone, setPhone] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [timer, setTimer] = useState(30);
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const inputsRef = useRef([]);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     agency: "",
//     state: "",
//     city: "",
//     pan: "",
//     gst: "",
//     address: "",
//     file: null
//   });

//   const countryData = {
//     IN: { flag: "🇮🇳", code: "+91" },
//     AE: { flag: "🇦🇪", code: "+971" }
//   };

//   const states = ["Haryana", "Delhi", "Punjab"];
//   const cities = {
//     Haryana: ["Gurgaon", "Faridabad"],
//     Delhi: ["New Delhi"],
//     Punjab: ["Amritsar", "Ludhiana"]
//   };

//   // TIMER
//   useEffect(() => {
//     if (step === 2 && timer > 0) {
//       const i = setInterval(() => setTimer(t => t - 1), 1000);
//       return () => clearInterval(i);
//     }
//   }, [step, timer]);

//   // OTP
//   const handleOtpChange = (value, index) => {
//     if (!/^[0-9]?$/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     if (value && index < 5) inputsRef.current[index + 1].focus();
//   };

//   const handleBackspace = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputsRef.current[index - 1].focus();
//     }
//   };

//   // FORM
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const isValidPAN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

//   const handleSubmit = () => {
//     if (!form.name || !form.email || !form.pan) {
//       alert("Please fill required fields");
//       return;
//     }

//     if (!isValidPAN.test(form.pan)) {
//       alert("Invalid PAN Number");
//       return;
//     }

//     setSuccess(true);
//   };

//   // 🔥 CLOSE FUNCTION (MASTER FIX)
//   const handleClose = () => {
//     setShowForm(false);
//     setSuccess(false);
//     setStep(1);
//     setPhone("");
//     setOtp(["", "", "", "", "", ""]);
//   };

//   return (
//     <>
//       <div className="login-card">
//         <h2>Get Started</h2>

//         {/* STEP 1 */}
//         {step === 1 && (
//           <>
//             <p>Log in using mobile number</p>

//             <div className="phone-input">
//               <span className="flag">
//                 {countryData[country]?.flag} {countryData[country]?.code}
//               </span>

//               <input
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter mobile number"
//               />
//             </div>

//             <button onClick={() => { setStep(2); setTimer(30); }}>
//               CONTINUE
//             </button>
//           </>
//         )}

//         {/* STEP 2 */}
//         {step === 2 && (
//           <>
//             <p>OTP sent to {phone}</p>

//             <div className="otp-container">
//               {otp.map((d, i) => (
//                 <input
//                   key={i}
//                   maxLength="1"
//                   value={d}
//                   ref={(el) => (inputsRef.current[i] = el)}
//                   onChange={(e) => handleOtpChange(e.target.value, i)}
//                   onKeyDown={(e) => handleBackspace(e, i)}
//                 />
//               ))}
//             </div>

//             <p>{timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}</p>

//             <button onClick={() => setShowForm(true)}>
//               VERIFY
//             </button>
//           </>
//         )}
//       </div>

//       {/* FORM */}
//       {showForm && !success && (
//         <div className="register-overlay" onClick={handleClose}>
//           <div 
//             className="register-container"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* ✅ CLOSE BUTTON */}
//             <button className="close-btn" onClick={handleClose}>
//               ✖
//             </button>

//             <h2>Complete Profile</h2>

//             <div className="form-grid">
//               <input name="name" onChange={handleChange} placeholder="Full Name" />
//               <input name="email" onChange={handleChange} placeholder="Email" />

//               <input value={phone} readOnly />

//               <input name="agency" onChange={handleChange} placeholder="Agency" />

//               <select name="state" onChange={handleChange}>
//                 <option>Select State</option>
//                 {states.map(s => <option key={s}>{s}</option>)}
//               </select>

//               <select name="city" onChange={handleChange}>
//                 <option>Select City</option>
//                 {cities[form.state]?.map(c => <option key={c}>{c}</option>)}
//               </select>

//               <input name="pan" onChange={handleChange} placeholder="PAN" />
//               <input name="gst" onChange={handleChange} placeholder="GST" />

//               <input name="address" onChange={handleChange} placeholder="Address" />

//               <input 
//                 type="file"
//                 onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
//               />
//             </div>

//             <button onClick={handleSubmit}>SUBMIT</button>

//           </div>
//         </div>
//       )}

//       {/* SUCCESS */}
//       {success && (
//         <div className="register-overlay" onClick={handleClose}>
//           <div 
//             className="register-container"
//             onClick={(e) => e.stopPropagation()}
//           >

//             <h2>🎉 Registration Successful</h2>
//             <p>Welcome to MyPartner</p>

//             <button onClick={handleClose}>
//               Close
//             </button>

//           </div>
//         </div>
//       )}
//     </>
//   );
// }



















import React, { useState, useRef, useEffect } from "react";
import "../styles/login.css";

export default function LoginCard({ country }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(30);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const [form, setForm] = useState({
    name: "", email: "", agency: "",
    state: "", city: "", pan: "",
    gst: "", address: "", file: null
  });

  const countryData = {
    IN: { flag: "🇮🇳", code: "+91" },
    AE: { flag: "🇦🇪", code: "+971" }
  };

  const states = ["Haryana", "Delhi", "Punjab"];
  const cities = {
    Haryana: ["Gurgaon", "Faridabad"],
    Delhi: ["New Delhi"],
    Punjab: ["Amritsar", "Ludhiana"]
  };

  useEffect(() => {
    if (step === 2 && timer > 0) {
      const i = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(i);
    }
  }, [step, timer]);

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputsRef.current[index + 1].focus();
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidPAN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.pan) {
      alert("Please fill required fields");
      return;
    }
    if (!isValidPAN.test(form.pan)) {
      alert("Invalid PAN Number");
      return;
    }
    setSuccess(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setSuccess(false);
    setStep(1);
    setPhone("");
    setOtp(["", "", "", "", "", ""]);
  };

  return (
    <>
      <div className="login-card">
        <h2>Get Started</h2>

        {step === 1 && (
          <>
            <p>Log in using mobile number</p>
            <div className="phone-input">
              <span className="flag">
                {countryData[country]?.flag} {countryData[country]?.code}
              </span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter mobile number"
                maxLength={10}
              />
            </div>
            <button
              className="continue-btn"
              disabled={phone.length < 8}
              onClick={() => { setStep(2); setTimer(30); }}
            >
              CONTINUE
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p>OTP sent to {countryData[country]?.code} {phone}</p>
            <div className="otp-container">
              {otp.map((d, i) => (
                <input
                  key={i}
                  maxLength="1"
                  value={d}
                  ref={(el) => (inputsRef.current[i] = el)}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  onKeyDown={(e) => handleBackspace(e, i)}
                />
              ))}
            </div>
            <div className="otp-actions">
              {timer > 0
                ? <span>Resend in {timer}s</span>
                : <button onClick={() => setTimer(30)}>Resend OTP</button>
              }
            </div>
            <div className="otp-buttons">
              <button onClick={() => setStep(1)}>EDIT NUMBER</button>
              <button
                className="continue-btn"
                onClick={() => setShowForm(true)}
              >
                VERIFY OTP
              </button>
            </div>
          </>
        )}

        <div className="offer-box">
          <span className="offer-tag">SPECIAL OFFER</span>
          <p><strong>Earn Promo Cash</strong> on Every Booking!</p>
        </div>
      </div>

      {showForm && !success && (
        <div className="register-overlay" onClick={handleClose}>
          <div className="register-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>✖</button>
            <h2>Complete Your Profile</h2>
            <div className="form-grid">
              <input name="name" onChange={handleChange} placeholder="Full Name *" />
              <input name="email" onChange={handleChange} placeholder="Email ID *" />
              <input value={phone} readOnly placeholder="Mobile Number" />
              <input name="agency" onChange={handleChange} placeholder="Agency Name *" />
              <select name="state" onChange={handleChange}>
                <option value="">Select State</option>
                {states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <select name="city" onChange={handleChange}>
                <option value="">Select City</option>
                {cities[form.state]?.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input name="pan" onChange={handleChange} placeholder="PAN Number *" />
              <input name="gst" onChange={handleChange} placeholder="GST Number (Optional)" />
              <input name="address" onChange={handleChange} placeholder="Address *" style={{ gridColumn: "span 2" }} />
              <input
                type="file"
                onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
                style={{ gridColumn: "span 2" }}
              />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>SUBMIT</button>
          </div>
        </div>
      )}

      {success && (
        <div className="register-overlay" onClick={handleClose}>
          <div className="register-container" style={{ textAlign: "center", maxWidth: "400px" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
            <h2>Registration Successful!</h2>
            <p style={{ color: "#666", marginTop: "8px" }}>Welcome to MyPartner. You're all set!</p>
            <button className="continue-btn" style={{ marginTop: "24px" }} onClick={handleClose}>
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </>
  );
}