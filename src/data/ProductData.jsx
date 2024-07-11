const ProductsData = [
  {
    id: 1,
    title: "Sneaker",
    price: 5000,
    company: "Company 1",
    category: "Stylish",
    featured: true,
    color: ["red", "blue", "green"],
    image: "./image/shoes1.jpg",
    description: "Product 1 description",
  },
  {
    id: 2,
    title: "Joker",
    price: 6500,
    company: "Company 1",
    category: "Sports",
    featured: true,
    color: ["red", "blue", "green"],
    image: "./image/shoes2.jpg",
    description: "Product 2 description",
  },
  {
    id: 3,
    title: "Gym Shoes",
    price: 8000,
    company: "Company 1",
    category: "Gym",
    featured: true,
    color: ["red", "blue", "green"],
    image: "./image/shoes3.jpeg",
    description: "Product 3 description",
  },
  {
    id: 4,
    title: "Product 4",
    price: 10000,
    company: "Company 1",
    category: "Category 1",
    featured: false,
    color: ["red", "blue", "green"],
    image: "./image/shoes1.jpg",
    description: "Product 4 description",
  },
  {
    id: 5,
    title: "Product 5",
    price: 10000,
    company: "Company 1",
    category: "Category 1",
    color: ["red", "blue", "green"],
    image: [
      {
        img1: "./image/shoes1.jpg",
      },
      {
        img2: "./image/shoes2.jpg",
      },
      {
        img3: "./image/shoes3.jpeg",
      },
      {
        img4: "./image/shoes1.jpg",
      },
    ],
    description: "Product 4 description",
    shipping: true,
    stock: 10,
    reviews: 100,
    stars: 4,
  },
];

export default ProductsData;

// category : formal, boots, sneakers, loafer sports
