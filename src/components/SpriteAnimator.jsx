import React, { useEffect, useRef } from "react";

const SpriteCharacter = ({
  image,
  frameWidth = 123,
  frameHeight = 140,
  columns = 7,
  rows = 2,
  fps = 12,
  loop = true,
  startRow = 0, // which row to play (0 = top)
}) => {
  const ref = useRef(null);

  useEffect(() => {
    let frame = 0;
    const totalFrames = columns * rows;

    const interval = setInterval(() => {
      const currentRow = startRow;
      const currentCol = frame % columns;

      const x = -currentCol * frameWidth;
      const y = -currentRow * frameHeight;

      if (ref.current) {
        ref.current.style.backgroundPosition = `${x}px ${y}px`;
      }

      frame++;

      if (!loop && frame >= columns) {
        clearInterval(interval);
      } else {
        frame %= columns;
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [frameWidth, frameHeight, columns, rows, fps, loop, startRow]);

  return (
    <div
      ref={ref}
      style={{
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
      }}
    />
  );
};

export default SpriteCharacter;
