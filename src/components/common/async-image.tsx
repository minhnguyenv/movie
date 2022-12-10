import { useEffect, useState } from "react";

interface IAsyncImageProps {
  src?: string;
  width?: number | string;
  height?: number | string;
}

const AsyncImage = (props: IAsyncImageProps) => {
  const [loadedSrc, setLoadedSrc] = useState<string | undefined>("");

  useEffect(() => {
    setLoadedSrc("");
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);
  if (loadedSrc === props.src) {
    return <img {...props} style={{ objectFit: "cover" }} />;
  }
  return null;
};

export default AsyncImage;
