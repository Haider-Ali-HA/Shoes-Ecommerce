const ProductsData = [
  {
    id: 1,
    title: "Urban Glide Sneakers",
    price: 5000,
    company: "UrbanFoot",
    category: "Casual Wear",
    featured: true,
    color: [
      "#343438",
      "#d1d3da",
      "#e8dac7", //black, gray, cream
    ],
    image: "/image/shoes1.jpg",
    description:
      "Crafted for the modern urbanite, our Urban Glide Sneakers combine sleek design with unparalleled comfort. Featuring a versatile color palette of black, gray, and cream, these sneakers are perfect for any casual or stylish ensemble.",
    multipleImage: [
      {
        id: 1,
        img: "/image/shoes1.jpg",
      },
      {
        id: 2,
        img: "/image/shoes2.jpg",
      },
      { id: 3, img: "/image/shoes3.jpg" },
    ],
    shipping: true,
    stock: 25,
    reviews: 200,
    stars: 4.5,
  },
  {
    id: 2,
    title: "Rugged Outdoor Boots",
    price: 9000,
    company: "EarthWalk",
    category: "Boots",
    featured: true,
    color: ["#77866f ", "#d1d3da  "],
    image: "/image/shoes7.jpg",
    description: "Durable boots designed for the great outdoors.",
    multipleImage: [
      { id: 1, img: "/image/shoes7.jpg" },
      { id: 2, img: "/image/shoes2.jpg" },
    ],
    shipping: true,
    stock: 8,
    reviews: 95,
    stars: 4.2,
  },
  {
    id: 3,
    title: "FlexFit Gym Trainers",
    price: 8000,
    company: "GymGear",
    category: "Fitness",
    featured: true,
    color: ["#e8dac7", "#d1d3da", "#e5e5e5"],
    image: "/image/shoes3.jpg",
    description:
      "Elevate your gym routine with our FlexFit Gym Trainers. Engineered for comfort and performance, these trainers will support you through every squat, lift, and run.",
    multipleImage: [
      {
        id: 1,
        img: "/image/shoes3.jpg",
      },
      {
        id: 2,
        img: "/image/shoes2.jpg",
      },
      {
        id: 3,
        img: "/image/shoes13.jpg",
      },
    ],
    shipping: true,
    stock: 20,
    reviews: 180,
    stars: 4.7,
  },
  {
    id: 4,
    title: "Trailblazer Hiking Boots",
    price: 10000,
    company: "OutdoorAdventures",
    category: "Outdoor",
    color: ["#77866f ", "#d1d3da  ", "#e8dac7  "],
    image: "/image/shoes12.jpg",
    description:
      "Conquer any terrain with our Trailblazer Hiking Boots. Designed for the outdoor enthusiast, these boots offer unmatched durability, support, and comfort on your most challenging adventures.",
    multipleImage: [
      {
        id: 1,
        img: "/image/shoes12.jpg",
      },
      {
        id: 2,
        img: "/image/shoes2.jpg",
      },
      {
        id: 3,
        img: "/image/shoes3.jpg",
      },
    ],
    shipping: true,
    stock: 15,
    reviews: 220,
    stars: 4.9,
  },

  {
    id: 5,
    title: "Casual Loafers",
    price: 3000,
    company: "UrbanSteps",
    category: "Loafer",

    color: ["#285ba8  ", "#d0ccc3 "],
    image: "/image/shoes4.jpg",
    description:
      "Elegant and comfortable loafers perfect for any casual outing.",
    multipleImage: [
      { id: 1, img: "/image/shoes4.jpg" },
      { id: 2, img: "/image/shoes5.jpg" },
    ],
    shipping: true,
    stock: 15,
    reviews: 85,
    stars: 4.5,
  },
  {
    id: 6,
    title: "Classic Formal Shoes",
    price: 7500,
    company: "ElegantSteps",
    category: "Formal",

    color: ["#d0ccc3 ", "#000000"],
    image: "/image/shoes5.jpg",
    description: "Sophisticated formal shoes for the modern professional.",
    multipleImage: [
      { id: 1, img: "/image/shoes5.jpg" },
      { id: 2, img: "/image/shoes6.jpg" },
    ],
    shipping: true,
    stock: 20,
    reviews: 120,
    stars: 5,
  },
  {
    id: 7,
    title: "Marathon Pro Running Shoes",
    price: 6500,
    company: "SpeedTrack",
    category: "Athletic",
  
    color: ["#d1d3da", "#e8dac7", "#77866f"],
    image: "/image/shoes2.jpg",
    description:
      "Designed for the dedicated athlete, our Marathon Pro Running Shoes offer superior performance and durability. With a color scheme inspired by nature, they're perfect for both the track and the trail.",
    multipleImage: [
      {
        id: 1,
        img: "/image/shoes2.jpg",
      },
      {
        id: 2,
        img: "/image/shoes12.jpg",
      },
      {
        id: 3,
        img: "/image/shoes3.jpg",
      },
    ],
    shipping: true,
    stock: 30,
    reviews: 250,
    stars: 4.8,
  },
  
  {
    id: 8,
    title: "Trendy Sneakers",
    price: 5500,
    company: "VerdantVoyage",
    category: "Sneakers",

    color: ["#b20626   ", "#285ba8  "],
    image: "/image/shoes8.jpg",
    description: "Stay trendy with these stylish sneakers.",
    multipleImage: [
      { id: 1, img: "/image/shoes8.jpg" },
      { id: 2, img: "/image/shoes4.jpg" },
    ],
    shipping: true,
    stock: 12,
    reviews: 110,
    stars: 4.8,
  },
  // Add 8 more products following the same structure
  {
    id: 9,
    title: "Sporty Trainers",
    price: 6700,
    company: "BioRunners",
    category: "Sports",

    color: ["#2d323a", "#b5e34d  "],
    image: "/image/shoes9.jpg",
    description: "High-performance trainers for the active lifestyle.",
    multipleImage: [
      { id: 1, img: "/image/shoes9.jpg" },
      { id: 2, img: "/image/shoes12.jpg" },
    ],
    shipping: true,
    stock: 20,
    reviews: 130,
    stars: 4.6,
  },
  {
    id: 10,
    title: "Elegant Sandals",
    price: 2500,
    company: "PureStride",
    category: "Sandals",

    color: ["#2d323a   ", "#2d323a   "],
    image: "/image/shoes10.jpg",
    description: "Elegant sandals for a light and breezy feel.",
    multipleImage: [
      { id: 1, img: "/image/shoes10.jpg" },
      { id: 2, img: "/image/shoes11.jpg" },
    ],
    shipping: true,
    stock: 25,
    reviews: 75,
    stars: 4.3,
  },
  {
    id: 11,
    title: "Modern Formal Shoes",
    price: 8000,
    company: "NaturePace",
    category: "Formal",

    color: ["#2d323a   ", "#b5e34d  "],
    image: "/image/shoes13.jpg",
    description:
      "Perfect blend of modern style and comfort for the professional.",
    multipleImage: [
      { id: 1, img: "/image/shoes13.jpg" },
      { id: 2, img: "/image/shoes12.jpg" },
    ],
    shipping: true,
    stock: 18,
    reviews: 90,
    stars: 4.7,
  },
  {
    id: 12,
    title: "Adventure Boots",
    price: 9500,
    company: "LeafySteps",
    category: "Boots",

    color: ["#b36554", "#2d323a   "],
    image: "/image/shoes14.jpg",
    description:
      "Rugged boots for your next adventure. Durable, comfortable, and stylish.",
    multipleImage: [
      { id: 1, img: "/image/shoes14.jpg" },
      { id: 2, img: "/image/shoes13.jpg" },
    ],
    shipping: true,
    stock: 10,
    reviews: 110,
    stars: 4.9,
  },
  {
    id: 13,
    title: "Classic Sneakers",
    price: 6000,
    company: "EcoSole",
    category: "Sneakers",

    color: ["#2d323a   ", "#b36554"],
    image: "/image/shoes15.jpg",
    description:
      "Classic sneakers that never go out of style. Comfortable for everyday wear.",
    multipleImage: [
      { id: 1, img: "/image/shoes15.jpg" },
      { id: 2, img: "/image/shoes14.jpg" },
    ],
    shipping: true,
    stock: 20,
    reviews: 125,
    stars: 4.5,
  },
  {
    id: 14,
    title: "Sporty Loafers",
    price: 4000,
    company: "EarthWalk",
    category: "Loafer",

    color: ["#3b3a33   ", "#2d323a   "],
    image: "/image/shoes16.jpg",
    description:
      "Blend of casual loafers with a sporty touch. Lightweight and versatile.",
    multipleImage: [
      { id: 1, img: "/image/shoes16.jpg" },
      { id: 2, img: "/image/shoes15.jpg" },
    ],
    shipping: true,
    stock: 15,
    reviews: 80,
    stars: 4.2,
  },
  {
    id: 15,
    title: "Eco-Friendly Running Shoes",
    price: 10000,
    company: "GreenStride",
    category: "Footwear",

    color: ["#2d323a", "#d1d3da", "#e8dac7"],
    image: "/image/shoes6.jpg",
    description:
      "Experience unparalleled comfort and support while making a positive impact on the environment. Our Eco-Friendly Running Shoes are crafted from sustainable materials, offering a perfect blend of durability, breathability, and stylish design. Ideal for the eco-conscious athlete who does not want to compromise on performance.",
    multipleImage: [
      {
        id: 1,
        img: "/image/shoes6.jpg",
      },
      {
        id: 2,
        img: "/image/shoes2.jpg",
      },
      {
        id: 3,
        img: "/image/shoes3.jpg",
      },
    ],
    shipping: true,
    stock: 25,
    reviews: 150,
    stars: 4.8,
  },
];

export default ProductsData;

// category : formal, boots, sneakers, loafer sports
