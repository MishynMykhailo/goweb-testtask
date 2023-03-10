import React from "react";

const ImagePictures = ({
  id,
  webp1x,
  webp2x,
  jpg1x,
  jpg2x,
  alt,
  className,
}) => {
  return (
    <picture key={id}>
      <source srcSet={`${webp2x} 2x, ${webp1x} 1x`} type="image/webp" />
      <source srcSet={`${jpg2x} 2x, ${jpg1x} 1x`} type="image/jpeg" />
      <img className={className} src="#" alt={alt} loading="lazy" />
    </picture>
  );
};

export default ImagePictures;
