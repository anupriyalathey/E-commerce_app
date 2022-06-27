const PRODUCTS = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro Max",
    price: 389,
    image: require("../assets/product_images/phone.jpeg"),
    description:
      "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
  },
  {
    id: 2,
    name: "PNY GeForce GTX 1060 6GB",
    price: 790,
    image: require("../assets/product_images/graphics.jpeg"),
    description:
      "Nvidia Turing architecture, with 1470MHz Core Clock and 1650MHz Boost Clock speeds to help meet the needs of demanding games.",
  },
  {
    id: 3,
    name: "Acer Predator Triton",
    price: 979,
    image: require("../assets/product_images/laptop.jpg"),
    description:
      "Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
