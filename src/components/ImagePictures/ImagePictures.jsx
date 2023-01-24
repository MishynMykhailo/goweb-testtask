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
      <source srcSet={`${webp1x} 1x, ${webp2x} 2x`} type="image/webp" />
      <source srcSet={`${jpg1x} 1x, ${jpg2x} 2x`} type="image/jpeg" />
      <img className={className} src="#" alt={alt} />
    </picture>
  );
};

export default ImagePictures;
