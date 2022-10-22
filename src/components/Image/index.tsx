import NextImage from "next/image";
import React from "react";

import styles from "./styles.module.scss";

interface ImageProps {
  src: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <NextImage src={src} alt={alt} layout="fill" className={styles.image} />
    </div>
  );
};
