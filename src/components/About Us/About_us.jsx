import Header from "../Header/Header";

const About_us = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <img src="src/assets/Slider/Slider%20(1).png" alt="Cafe" className="image-container" />
        <div className="content-container">
          <h2>About Us </h2>
          <p>At PERKY BEANS, we believe in providing our customers with the best dining experience possible. Our cafe was established in [2023], and since then, we have been serving delicious food and beverages to our valued patrons.</p>
          <p>Our mission is to create a warm and inviting atmosphere where friends and family can come together and enjoy great food, excellent coffee, and delightful conversations. Whether you`&apose;`re looking for a quick bite to eat, a place to work, or a spot to unwind, My Cafe is the perfect destination for you.</p>
          <h3>Our Specialties </h3>
          <ul>
            <li>Handcrafted Coffees and Teas</li>
            <li>Delicious Breakfast Options</li>
            <li>Mouthwatering Desserts</li>
            <li>Healthy and Fresh Salads</li>
          </ul>

          <h3>Our Team </h3>
          <p>Our dedicated team of baristas, chefs, and staff work tirelessly to ensure that every visit to My Cafe is memorable. We take pride in our attention to detail and commitment to delivering exceptional service to each and every customer.</p>
          <h3>Community Involvement </h3>
          <p>We believe in giving back to the community that has supported us throughout the years. My Cafe actively participates in local events, charities, and environmental initiatives to make a positive impact on the neighborhood we serve.</p>
          <h3>Visit Us Today! </h3>
          <p>We can`&apose;`t wait to welcome you to My Cafe. Come experience the delicious flavors, friendly ambiance, and top-notch hospitality that sets us apart. Whether you`&apose;`re a regular or a first-time visitor, we promise to make your time with us enjoyable and satisfying.</p>
          <p className="note">Thank you for choosing PERKY BEANS - where great food and delightful moments meet!</p>
        </div>
      </div>
    </>
  );
};

export default About_us;
