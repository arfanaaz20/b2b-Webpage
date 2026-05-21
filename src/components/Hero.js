import React from "react";
import LoginCard from "./LoginCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/hero.css";

// export default function Hero() {
export default function Hero({ country }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const carouselData = [
    { title: "Traviz Idea", img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df" },
    { title: "Ajay Modi Travels Private Limited", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { title: "Hudels Hospitality Services", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
    { title: "Travel Agency Pro", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f" },
    { title: "Holiday Experts", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  ];

  return (
    <div className="hero-wrapper">

      {/* HERO TOP */}
      <div className="hero-top">
        <div className="hero">
          <div className="hero-badge">
            <span className="dot"></span>
            Trusted by 50,000+ travel agents
          </div>
          <h1>
            The Smart Way to <br />
            <span>Grow Your Business</span>
          </h1>
          <p>
            Welcome to BirdMyTrip, a platform built exclusively for travel agents
            to fulfill all their customer travel needs.
          </p>
          <div className="tags">
            <div className="tag">✈️ Get the Best Deals on Flights</div>
            <div className="tag">🏨 Book from the Widest Range of Hotels</div>
          </div>
          <div className="dots">
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="hero-right">
          {/* <LoginCard /> */}
          <LoginCard country={country} />
        </div>
      </div>

      {/* BANNER */}
      <div className="banner">
        <div className="banner-left">
          <div className="banner-icon">🏆</div>
          <div>
            <h2 id="myPartnerSection">
              Become a <span>myPartner Hero</span> Today
            </h2>
            <p>Get rewards & benefits as your superpowers!</p>
          </div>
        </div>
        <div className="banner-right">
          <div>💰 Get Unlimited Cashback Every Month</div>
          <div>💳 Get up to 1% Recharge Incentive</div>
        </div>
      </div>

      {/* WHY */}
      <div className="why">
        <h2>Why myPartner?</h2>
        <p>Everything a travel agent needs, in one platform</p>
        <div className="why-grid">
          <div className="why-item">
            <div className="icon-circle">🏷️</div>
            <h4>BEST EVER RATES</h4>
            <p>Exclusive rates for our partners</p>
          </div>
          <div className="why-item">
            <div className="icon-circle">📞</div>
            <h4>EXPRESS CARE</h4>
            <p>Easy-to-use tools for query resolutions</p>
          </div>
          <div className="why-item">
            <div className="icon-circle">📋</div>
            <h4>WIDEST INVENTORY</h4>
            <p>300+ Airline carriers and 8 lac+ hotel properties</p>
          </div>
          <div className="why-item">
            <div className="icon-circle">🔒</div>
            <h4>CONFIDENTIALITY ASSURED</h4>
            <p>Complete confidentiality of your customer details</p>
          </div>
        </div>
      </div>

      {/* ADVANTAGES */}
      <div className="advantages" id="productHighlights">
        <div className="adv-left">
          <h2>myPartner Advantages</h2>
          <p>It is a feature loaded platform!</p>
          <div className="adv-list">
            <div className="adv-item">💳 Get easy access to booking and payment records</div>
            <div className="adv-item">✈️ Manage easy post-booking modifications on flights</div>
            <div className="adv-item">🛡️ Safe stays with MySafety compliant properties</div>
            <div className="adv-item">❌ Best-in-class cancellation policies</div>
            <div className="adv-item">💬 Share options on WhatsApp</div>
            <div className="adv-item">🖨️ Print bookings with your logo</div>
          </div>
        </div>
        <div className="adv-right">
          <img
            src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg"
            alt="dashboard"
          />
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="carousel-section">
        <h2>People Love myPartner</h2>
        <p>See some of the stories.</p>
        <Slider {...settings}>
          {carouselData.map((item, index) => (
            <div key={index} className="carousel-card">
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
        </Slider>
      </div>

      {/* CTA BANNER — carousel ke niche */}
      <div className="cta-banner">
        <div className="cta-banner-left">
          <h2>Start a Profitable Business Today with the Best B2B Travel Portal in India!</h2>
          <p>It is a feature loaded platform!</p>
        </div>
        <button className="cta-signup-btn">SIGN UP NOW</button>
      </div>

      {/* EVERYTHING */}
      <div className="everything">
        <div className="everything-top">
          <h2>Everything Your Customer Needs!</h2>
          <p>Helping you find a perfect stay for everyone.</p>
        </div>
        <div className="everything-cards">
          <div className="everything-card">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="stay" />
          </div>
          <div className="everything-card">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" alt="stay" />
          </div>
          <div className="everything-card">
            <img src="https://images.unsplash.com/photo-1501117716987-c8e1ecb210c7" alt="stay" />
          </div>
          <div className="everything-card">
            <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" alt="stay" />
          </div>
          <div className="everything-card">
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" alt="stay" />
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="info-section">
        <h2>B2B Travel Portal in India</h2>
        <p>
          In recent years, the travel industry in India has witnessed tremendous growth, paving the way
          for the emergence of several B2B travel portals catering to the needs of travel agents.
          The B2B travel portal in India plays a crucial role in fostering collaboration and facilitating
          seamless business relationships within the travel industry.
        </p>
        <p>
          A B2B travel platform offers myriad benefits to travel agents, such as hotel and flight bookings.
          This platform aids agents in saving time and effort, enabling them to deliver superior service to their clients.
        </p>
        <h3>Steps to Apply in myPartner</h3>
        <ul>
          <li>Step 1. Enter your phone number and submit the OTP received.</li>
          <li>Step 2. Fill in your personal information and upload your pan card.</li>
          <li>Step 3. Upload your KYC documents.</li>
          <li>Step 4. Complete registration and create password.</li>
        </ul>
        <h3>Reasons to start your own business with myPartner</h3>
        <ul>
          <li>Best rates ever for travel agents</li>
          <li>300+ airlines & 8 lakh+ hotels</li>
          <li>Easy-to-use tools & Express Care</li>
          <li>Full confidentiality of bookings</li>
        </ul>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <span>© 2026 <strong>BirdMyTrip</strong></span>
        <span>Country <strong>INDIA</strong></span>
      </footer>

    </div>
  );
}