import { useEffect } from 'react';

const usePreloadImages = (images: string[]) => {
  useEffect(() => {

    
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    images.forEach(preloadImage);
  }, [images]);
};

export default usePreloadImages;