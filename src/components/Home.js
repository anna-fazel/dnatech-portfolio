import { useState } from "react";

import Card from "./Card";

const Home = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2021/11/09/18/51/llama-6782140_960_720.jpg",
      heading: "heading1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, voluptatibus.",
      author: "admin",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2021/11/09/18/51/llama-6782140_960_720.jpg",
      heading: "heading2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, voluptatibus.",
      author: "anna",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2021/11/09/18/51/llama-6782140_960_720.jpg",
      heading: "heading2",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, voluptatibus.",
      author: "admin",
    },
  ]);

  return (
    <div>
      <Card card={card} title="All" />
      {/* <Card card={card.filter((card)=>card.author==='anna')} title="Anna"/>  */}
    </div>
  );
};

export default Home; // comment
