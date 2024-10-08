const ProductsData = [
  {
    id: 1,
    title: "Urban Glide Sneakers",
    price: 5000,
    company: "UrbanFoot",
    category: "Casual Sneakers",
    featured: true,
    color: [
      "#be030d",
      "#ffffff",
      "#000000",
    ],
    image: "/shoes/redSneaker.svg",
    description:
      "Crafted for the modern urbanite, our Urban Glide Sneakers combine sleek design with unparalleled comfort. Featuring a versatile color palette of black, gray, and cream, these sneakers are perfect for any casual or stylish ensemble.",
    multipleImage: [
      { id: 1, img: "/shoes/redSneaker.svg" },
      { id: 2, img: "/shoes/redSneaker1.svg" },
      { id: 3, img: "/shoes/redSneaker2.svg" },
      { id: 4, img: "/shoes/redSneaker3.svg" },
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
    color: ["#285ba8"],
    image: "/shoes/brownBoot.svg",
    description: "Durable boots designed for the great outdoors.",
    multipleImage: [
      { id: 1, img: "/shoes/brownBoot.svg" },
      { id: 2, img: "/shoes/brownBoot1.svg" },
      { id: 3, img: "/shoes/brownBoot2.svg" },
      { id: 4, img: "/shoes/brownBoot3.svg" },
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
    category: "Athletic Shoes",
    featured: true,
    color: [ "#285ba8"],
    image: "/shoes/darkBlueAthletic.svg",
    description:
      "Elevate your gym routine with our FlexFit Gym Trainers. Engineered for comfort and performance, these trainers will support you through every squat, lift, and run.",
    multipleImage: [
      { id: 1, img: "/shoes/darkBlueAthletic.svg" },
      { id: 2, img: "/shoes/darkBlueAthletic1.svg" },
      { id: 3, img: "/shoes/darkBlueAthletic2.svg" },
      { id: 4, img: "/shoes/darkBlueAthletic3.svg" },
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
    category: "Dress Shoes",
    color: ["#2d323a"],
    image: "/shoes/blackDress.svg",
    description:
      "Conquer any terrain with our Trailblazer Hiking Boots. Designed for the outdoor enthusiast, these boots offer unmatched durability, support, and comfort on your most challenging adventures.",
    multipleImage: [
      { id: 1, img: "/shoes/blackDress.svg" },
      { id: 2, img: "/shoes/blackDress1.svg" },
      { id: 3, img: "/shoes/blackDress2.svg" },
    ],
    shipping: true,
    stock: 17,
    reviews: 220,
    stars: 4.9,
  },
  {
    id: 5,
    title: "Casual Loafers",
    price: 3000,
    company: "UrbanFoot",
    category: "Casual Sneakers",
    color: ["#285ba8"],
    image: "/shoes/whiteSneaker.svg",
    description:
      "Elegant and comfortable loafers perfect for any casual outing.",
    multipleImage: [
      { id: 1, img: "/shoes/whiteSneaker.svg" },
      { id: 2, img: "/shoes/whiteSneaker1.svg" },
      { id: 3, img: "/shoes/whiteSneaker2.svg" },
      { id: 4, img: "/shoes/whiteSneaker3.svg" },
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
    company: "UrbanFoot",
    category: "Dress Shoes",
    color: ["#951207", "#000000"],
    image: "/shoes/brownDress.svg",
    description: "Sophisticated formal shoes for the modern professional.",
    multipleImage: [
      { id: 1, img: "/shoes/brownDress.svg" },
      { id: 2, img: "/shoes/brownDress1.svg" },
      { id: 3, img: "/shoes/brownDress2.svg" },
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
    company: "UrbanFoot",
    category: "Athletic Shoes",
    color: [ "#285ba8"],
    image: "/shoes/blueAthletic.svg",
    description:
      "Designed for the dedicated athlete, our Marathon Pro Running Shoes offer superior performance and durability. With a color scheme inspired by nature, they're perfect for both the track and the trail.",
    multipleImage: [
      { id: 1, img: "/shoes/blueAthletic.svg" },
      { id: 2, img: "/shoes/blueAthletic1.svg" },
      { id: 3, img: "/shoes/blueAthletic2.svg" },
      { id: 4, img: "/shoes/blueAthletic3.svg" },
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
    company: "GymGear",
    category: "Casual Sneakers",
    color: ["#0a463b", "#285ba8"],
    image: "/shoes/greenSneaker.svg",
    description: "Stay trendy with these stylish sneakers.",
    multipleImage: [
      { id: 1, img: "/shoes/greenSneaker.svg" },
      { id: 2, img: "/shoes/greenSneaker1.svg" },
      { id: 3, img: "/shoes/greenSneaker2.svg" },
      { id: 4, img: "/shoes/greenSneaker3.svg" },
    ],
    shipping: true,
    stock: 12,
    reviews: 110,
    stars: 4.8,
  },
  {
    id: 9,
    title: "Sporty Trainers",
    price: 6700,
    company: "OutdoorAdventures",
    category: "Sports Shoes",
    color: ["#2d323a", "#b5e34d"],
    image: "/shoes/blueSports.svg",
    description: "High-performance trainers for the active lifestyle.",
    multipleImage: [
      { id: 1, img: "/shoes/blueSports.svg" },
      { id: 2, img: "/shoes/blueSports1.svg" },
      { id: 3, img: "/shoes/blueSports2.svg" },
      { id: 4, img: "/shoes/blueSports3.svg" },
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
    company: "GymGear",
    category: "Sports Shoes",
    color: [ "#2d323a"],
    image: "/shoes/graySports.svg",
    description: "Elegant sandals for a light and breezy feel.",
    multipleImage: [
      { id: 1, img: "/shoes/graySports.svg" },
      { id: 2, img: "/shoes/graySports1.svg" },
      { id: 3, img: "/shoes/graySports2.svg" },
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
    company: "OutdoorAdventures",
    category: "Sports Shoes",
    color: ["#2d323a", "#b5e34d"],
    image: "/image/shoes13.jpg",
    description:
      "Perfect blend of modern style and comfort for the professional.",
    multipleImage: [
      { id: 1, img: "/shoes/redSports.svg" },
      { id: 2, img: "/shoes/redSports1.svg" },
      { id: 3, img: "/shoes/redSports2.svg" },
      { id: 4, img: "/shoes/redSports3.svg" },
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
    company: "GymGear",
    category: "Sports Shoes",
    color: ["#b5e34d", "#2d323a"],
    image: "/shoes/greenSports.svg",
    description:
      "Rugged boots for your next adventure. Durable, comfortable, and stylish.",
    multipleImage: [
      { id: 1, img: "/shoes/greenSports.svg" },
      { id: 2, img: "/shoes/greenSports1.svg" },
      { id: 3, img: "/shoes/greenSports2.svg" },
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
    company: "EarthWalk",
    category: "Casual Sneakers",
    color: ["#2d323a", "#b5e34d"],
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
    category: "Casual Sneakers",
    color: ["#2d323a", "#b5e34d"],
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
    company: "EarthWalk",
    category: "Athletic Shoes",
    color: ["#2d323a"],
    image: "/image/shoes6.jpg",
    description:
      "Experience unparalleled comfort and support while making a positive impact on the environment. Our Eco-Friendly Running Shoes are crafted from sustainable materials, offering a perfect blend of durability, breathability, and stylish design. Ideal for the eco-conscious athlete who does not want to compromise on performance.",
    multipleImage: [
      { id: 1, img: "/image/shoes6.jpg" },
      { id: 2, img: "/image/shoes2.jpg" },
      { id: 3, img: "/image/shoes3.jpg" },
    ],
    shipping: true,
    stock: 25,
    reviews: 150,
    stars: 4.8,
  },
];

export default ProductsData;
