import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const [images, setimages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
