import { List } from "antd";
import { create } from "zustand";
import Apple from "../assets/image/Apple (1).jpg";
import Acer from "../assets/image/Acer2.jpg";
import Dell from "../assets/image/Dell1.jpg";
import Asus from "../assets/image/Asus1.jpg";

export const productStore = create((set) => ({
  count: 10, //state
  list: [
    {
      id: 1,
      name: "Mackbook Pro 2022",
      des: "BRAM: 16GB, SSD: 512GB",
      price: 1200,
      image: Apple,
    },
    {
      id: 2,
      name: "Acer Aspire 5",
      des: "BRAM: 8GB, SSD: 256GB",
      price: 900,
      image: Acer,
    },
    {
      id: 3,
      name: "Dell XPS 13",
      des: "BRAM: 16GB, SSD: 512GB",
      price: 1100,
      image: Dell,
    },
    {
      id: 4,
      name: "Apple MacBook Air",
      des: "BRAM: 16GB, SSD: 1TB",
      price: 1300,
      image: Apple,
    },
    {
      id: 5,
      name: "Asus ROG Zephyrus G14",
      des: "BRAM: 16GB, SSD: 1TB",
      price: 1400,
      image: Asus,
    },
    {
      id: 6,
      name: "Asus ZenBook 14",
      des: "BRAM: 8GB, SSD: 512GB",
      price: 950,
      image: Apple,
    },
    {
      id: 7,
      name: "Acer Swift 3",
      des: "BRAM: 8GB, SSD: 256GB",
      price: 850,
      image: Apple,
    },
    {
      id: 8,
      name: "Microsoft Surface Laptop 4",
      des: "BRAM: 16GB, SSD: 512GB",
      price: 1250,
      image: Apple,
    },
    {
      id: 9,
      name: "Razer Blade 15",
      des: "BRAM: 16GB, SSD: 1TB",
      price: 1800,
      image: Apple,
    },
    {
      id: 10,
      name: "Google Pixelbook Go",
      des: "BRAM: 8GB, SSD: 256GB",
      price: 650,
      image: Apple,
    },
  ],
}));
