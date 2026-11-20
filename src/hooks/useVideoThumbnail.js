import { useState, useEffect } from 'react';

const getInitialThumbnail = (videoUrl, fallback = '') => {
  if (!videoUrl) return fallback;
  const ytMatch = videoUrl.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i);
  if (ytMatch && ytMatch[1]) {
    return `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
  }
  return fallback;
};

/**
 * Custom hook to dynamically obtain the original thumbnail from any Vimeo or YouTube video URL.
 * Falls back to initialThumbnail immediately, then updates if the URL changes.
 */
export const useVideoThumbnail = (videoUrl, initialThumbnail = '') => {
  const [thumbnail, setThumbnail] = useState(() => getInitialThumbnail(videoUrl, initialThumbnail));

  useEffect(() => {
    if (!videoUrl) return;

    // YouTube check
    const ytMatch = videoUrl.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/i);
    if (ytMatch && ytMatch[1]) {
      // Handled during initial state or update
      return;
    }

    // Vimeo check
    const vimeoMatch = videoUrl.match(/vimeo\.com\/(?:video\/)?([0-9]+)/i);
    if (vimeoMatch && vimeoMatch[1]) {
      const vimeoId = vimeoMatch[1];
      let isMounted = true;

      fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (isMounted && data && data.thumbnail_url) {
            // Upgrade Vimeo thumbnail to high-res 960px width
            const highRes = data.thumbnail_url.replace(/_[0-9]+x[0-9]+(\?.*)?$/, '_960');
            setThumbnail(highRes);
          }
        })
        .catch(() => {
          // Keep initial thumbnail on fetch failure
        });

      return () => {
        isMounted = false;
      };
    }
  }, [videoUrl]);

  return thumbnail;
};

export default useVideoThumbnail;
