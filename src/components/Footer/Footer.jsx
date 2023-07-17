import React from "react";
import { BiLogoInstagramAlt, BiLogoFacebookSquare, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoPlayStore } from "react-icons/bi";
import { BsApple } from "react-icons/bs";
const HeaderData = [
  {
    Title: "ORDER NOW",
    Links: [
      {
        text: "Shipping",
        link: "#"
      },
      {
        text: "Reserve Seat",
        link: "#"
      },
      {
        text: "Terms and Conditions",
        link: "#"
      },
      {
        text: "Privacy Policy",
        link: "#"
      },
    ]
  },
  {
    Title: "SUPPORT",
    Links: [
      {
        text: "Shipping",
        link: "#"
      },
      {
        text: "Reserve Seat",
        link: "#"
      },
      {
        text: "Terms and Conditions",
        link: "#"
      },
      {
        text: "Privacy Policy",
        link: "#"
      },
    ]
  },
  {
    Title: "MORE INFO",
    Links: [
      {
        text: "Contact Us",
        link: "#"
      },
      {
        text: "Join our team",
        link: "#"
      },
      {
        text: "Corporate Gifting",
        link: "#"
      },
    ]
  }
]
const Footer = () => {
  return <footer>
    <ol>
      {
        HeaderData.map((curr,ids) => {
          return (
            <li id="footerMenu" key={ids}>
              <h3>{curr.Title}</h3>
              <ul>
                {curr.Links.map((Links,ids2) => {
                  return (
                    <li key={ids2}>
                      <a href={Links.link}>
                        {Links.text}</a>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })
      }
      <li id="footerMenu"><h4><a href="#">VISIT PERKY BEAN CAFE</a></h4></li>
      <l1 id="SocialMedia">
        <h2>Follow us on</h2>

        <a href="#"><BiLogoFacebookSquare /></a>
        <a href="#"><BiLogoInstagramAlt /></a>
        <a href="#"><BiLogoTwitter /></a>
        <a href="#"><BiLogoLinkedinSquare /></a>
      </l1>
    </ol>

    <div id="downloadApp">
      <div>
        <BsApple />
        <p>Download on the App Store</p>
      </div>
      <div>
        <BiLogoPlayStore />
        <p>Get it on Google Play</p>
      </div>
    </div>
    <div id="feedback">
      <p>GIVE YOUR VALUABLE FEEDBACK </p>
      <button>GIVE FEEDBACK</button>
    </div>
  </footer>;
};

export default Footer;
