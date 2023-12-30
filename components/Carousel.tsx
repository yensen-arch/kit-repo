"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const InfiniteCarousel = () => {
  const imageSources = [
    'https://imgs.search.brave.com/E5AjwmscUkTKY6AG4t_1pzjEmnKa9DDnAkeXevab2Jw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA',
    'https://imgs.search.brave.com/kau4VQcK_tDOp3lsvb_gEc1Krt8R55udIlZTkpODCzM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNmJpNndL/SU01RERNNVUxUHRH/VkZjUC8xYzdmY2U2/ZGUzM2JiNjU3NTU0/OGE2NDZmZjliMDNh/YS9uYXR1cmUtcGhv/dG9ncmFwaHktcGlj/dHVyZXMuanBnP2Zp/dD1maWxsJnc9NjAw/Jmg9NDAw',
    'https://imgs.search.brave.com/GTE4LAKosSCqG7DAO-CzBP-pALCa2cQxqkPhw3DnkhY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0dHlpbWFn/ZXMuY29tL2Rpc3Bs/YXktc2V0cy9jcmVh/dGl2ZS1sYW5kaW5n/L2Nhcm91c2VsLzg2/NzhuMWZndV9IUC1D/YXJvdXNlbC1TZXB0/MjAyM19BSS0xNDQw/eDU2NC5qcGc',
    // Add more image sources as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, imageSources.length]);

  const imgStyle = {
    width: '800px', // Adjust as needed
    height: '375px', // Maintain aspect ratio
    display: 'block',
  };

  return (
    <div>
      {imageSources.map((src, index) => (
       <Image
       key={index}
       src={src}
       alt={`Image ${index + 1}`}
       width={800} // Already added
       height={500} // Add this line
       style={{ ...imgStyle, display: index === currentIndex ? 'block' : 'none' }}
     />
      ))}
    </div>
  );
};

export default InfiniteCarousel;
