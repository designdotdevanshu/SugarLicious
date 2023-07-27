import Image1 from "../assets/Frontpage/Image (10).png";
import Image2 from "../assets/Frontpage/Image (13).png";
import Image3 from "../assets/Frontpage/Image (16).png";
import Image4 from "../assets/Frontpage/Image (22).png";
import Image5 from "../assets/Frontpage/Image (27).png";
import Image6 from "../assets/Frontpage/Image (16).png";
import Image7 from "../assets/Frontpage/Image (28).png";
// import Image8 from "../assets/Frontpage/Image (10).png";
// import Image9 from "../assets/Frontpage/Image (17).png";
import Image10 from "../assets/Frontpage/Image (23).png";
import Image11 from "../assets/Frontpage/Image (21).png";
import Image12 from "../assets/Frontpage/Image (26).png";
import Image13 from "../assets/Frontpage/Image (35).png";
import Image14 from "../assets/Frontpage/Image (36).png";
import Image15 from "../assets/Frontpage/Image (54).png";
import Image16 from "../assets/Frontpage/Image (47).png";
import Image17 from "../assets/Frontpage/Image (55).png";
import Image18 from "../assets/Frontpage/Image (56).png";
//import Image19 from "../assets/Frontpage/Image (50).png"
// import Image20 from "../assets/Frontpage/Image (29).png";
import Image21 from "../assets/Frontpage/Image (30).png";
// import Image22 from "../assets/Frontpage/Image (31).png";
import Image23 from "../assets/Frontpage/Image (32).png";
// import Image24 from "../assets/Frontpage/Image (33).png";

// for Desktop 12
const FrontJSON = [
  {
    Title: "OUR SPECIALITY",
    Products: [
      {
        Name: "LATTE COFFEE",
        Image: Image1,
        _id: "ffd71c0f",
        Category: "Beverages",
        type: "Product",
      },
      {
        Name: "CHOCOLATE MUFFIN",
        Image: Image2,
        _id: "2161396f",
        Category: "Muffins",
        type: "Product",
      },
      {
        Name: "BUTTERSCOTCH MUFFIN",
        Image: Image3,
        _id: "0cb089e1",
        Category: "Muffins",
        type: "Product",
      },
      {
        Name: "MOJITO",
        Image: Image4,
        _id: "9815279e",
        Category: "Beverages",
        type: "Product",
      },
      {
        Name: "CHOCOLATE DONUTS",
        Image: Image5,
        _id: "abfswe62",
        Category: "Muffins",
        type: "Product",
      },
    ],
  },
  {
    Title: "OUR  PRODUCTS",
    Products: [
      {
        Name: "MUFFIN AND CAKE",
        Image: Image6,
        Category: "Muffins",
      },
      {
        Name: "PIZZAS",
        Image: Image7,
        Category: "Pizza",
      },
      // {
      //     Name:"COFFEE",
      //     Image:Image8,
      //     Category:""
      // },
      // {
      //     Name:"JUICE",
      //     Image:Image9,
      //     Category:"Beverages"
      // },
      {
        Name: "BEVERAGES",
        Image: Image21,
        Category: "Beverages",
      },
      {
        Name: "SMOOTHIE & ICE CREAM",
        Image: Image10,
        Category: "Beverages",
      },
      // {
      //     Name:"ICE CREAM",
      //     Image:Image20,
      //     Category:"Beverages"
      // } ,
      {
        Name: "SNAKES AND SIDES",
        Image: Image23,
        Category: "SnacksAndSides",
      },
      // {
      //     Name:"NOODLES",
      //     Image:Image22,
      //     Category:"SnacksAndSides"
      // },
      // {
      //     Name:"BURGER",
      //     Image:Image23,
      //     Category:"SnacksAndSides"
      // } ,
      // {
      //     Name:"FRENCH FRIES",
      //     Image:Image24,
      //     Category:"SnacksAndSides"
      // }
    ],
  },
  {
    Title: "COMBOS",
    Products: [
      {
        Name: "BUY 1 GET 1 FREE",
        Image: Image11,
        Category: "SnacksAndSides",
      },
      {
        Name: "BURGUR",
        Image: Image12,
        Category: "SnacksAndSides",
      },
      {
        Name: "DONUTS",
        Image: Image13,
        Category: "SnacksAndSides",
      },
      {
        Name: "COFFEE",
        Image: Image14,
        Category: "Beverages",
      },
    ],
  },
];

const Reviews = [
  {
    CustomerName: "SHUBHAM JOSHI",
    Review: "I have booked seats in the PERKY BEANS to celebrate my birthday with my family. Everything is per the plan./n I enjoy my special day with nice and cool ambience.",
    CustomerImage: Image16,
    Rating: 4.0,
    Date: "02/05/2022",
  },
  {
    CustomerName: "DEVANSHU",
    Review:
      "Quality is a crucial aspect of any cafe, especially when it comes to serving drinks and sweets. Customers appreciate cafes that prioritize high-quality ingredients, preparation methods, and overall craftsmanship in their offerings. It's important for cafes like Perky Beans to maintain consistent quality in their drinks and sweets to provide an enjoyable and satisfying experience for their customer./n Unique and Exceptional Products :Offering unique and exceptional drinks and sweets can set a cafe. ",
    CustomerImage: Image18,
    Rating: 4.8,
    Date: "12/08/2022",
  },
  {
    CustomerName: "RISHABH",
    Review: "Ambience of the cafe is so good & interior design of the cafe was appealing and perhaps had a unique or stylish vibe./n Particularly, Lattee Coffee is my favourite.",
    CustomerImage: Image15,
    Rating: 4.8,
    Date: "21/06/2022",
  },
  {
    CustomerName: "DEVANSH",
    Review:
      "Quality is a crucial aspect of any cafe, especially when it comes to serving drinks and sweets. Customers appreciate cafes that prioritize high-quality ingredients, preparation methods, and overall craftsmanship in their offerings. It's important for cafes like Perky Beans to maintain consistent quality in their drinks and sweets to provide an enjoyable and satisfying experience for their customer./n Unique and Exceptional Products :Offering unique and exceptional drinks and sweets can set a cafe ",
    CustomerImage: Image17,
    Rating: 4.8,
    Date: "30/04/2022",
  },
];

export {FrontJSON, Reviews};
