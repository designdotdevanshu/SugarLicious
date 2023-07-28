import {BiLogoInstagramAlt, BiLogoFacebookSquare, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoPlayStore} from "react-icons/bi";
import {BsApple} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
const HeaderData = [
  {
    Title: "ORDER NOW",
    Links: [
      {
        text: "Pizza",
        link: "/SugarLicious/Products/Pizza/",
      },
      {
        text: "Muffins",
        link: "/SugarLicious/Products/Muffins/",
      },
      {
        text: "Beverages",
        link: "/SugarLicious/Products/Beverages/",
      },
      {
        text: "Snacks & Slides",
        link: "/SugarLicious/Products/SnacksAndSides/",
      },
    ],
  },
  {
    Title: "SUPPORT",
    Links: [
      {
        text: "Shipping",
        link: "/SugarLicious/Orders",
      },
      {
        text: "Reserve Seat",
        link: "/SugarLicious/ReserveSeat",
      },
      {
        text: "Terms and Conditions",
        link: "#",
      },
      {
        text: "Privacy Policy",
        link: "#",
      },
    ],
  },
  {
    Title: "MORE INFO",
    Links: [
      {
        text: "About Us",
        link: "/SugarLicious/AboutUs",
      },
      {
        text: "Contact Us",
        link: "/SugarLicious/Contact",
      },
      {
        text: "Join our team",
        link: "#",
      },
      {
        text: "Corporate Gifting",
        link: "#",
      },
    ],
  },
];

const SocialLinks = [
  {
    Title: "Follow us on",
    Links: [
      {
        text: <BiLogoFacebookSquare />,
        link: "https://www.facebook.com/",
      },
      {
        text: <BiLogoInstagramAlt />,
        link: "https://www.instagram.com/",
      },
      {
        text: <BiLogoTwitter />,
        link: "https://www.twitter.com/",
      },
      {
        text: <BiLogoLinkedinSquare />,
        link: "https://www.linkedin.com/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <ol>
        {HeaderData.map((curr, ids) => {
          return (
            <li id="footerMenu" key={ids}>
              <h3>{curr.Title}</h3>
              <ul>
                {curr.Links.map((Links, ids2) => {
                  return (
                    <li key={ids2}>
                      <NavLink to={Links.link}>{Links.text}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
        <li id="footerMenu">
          <h4>
            <Link to="/">VISIT PERKY BEAN CAFE</Link>
          </h4>
          <br />
          <br />
          <p>&copy; 2023 PerkyBean</p>
        </li>
        {SocialLinks.map((cur, ids2) => {
          return (
            <li id="SocialMedia" key={ids2}>
              <h2>{cur.Title}</h2>
              <div id="social-icons">
                {cur.Links.map((Link, id3) => {
                  return (
                    <a href={Link.link} target="_blank" rel="noreferrer" key={id3}>
                      {Link.text}
                    </a>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>

      <div id="downloadApp">
        {/* <a href="http://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer"> */}
        <a href="https://www.apple.com/in/app-store/developing-for-the-app-store/" target="_blank" rel="noopener noreferrer">
          <div>
            <BsApple />
            <p>Download on the App Store</p>
          </div>
        </a>
        <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
          <div>
            <BiLogoPlayStore />
            <p>Get it on Google Play</p>
          </div>
        </a>
      </div>
      <div id="feedback">
        <p>GIVE YOUR VALUABLE FEEDBACK </p>
        <NavLink to="/SugarLicious/contact">
          <button>GIVE FEEDBACK</button>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
