// src/components/PixelSmiley.tsx

// ── 8-bit pixel smiley face ──────────────────────────────────────────────────
// Grid is 10×10: 0 = transparent, 1 = face fill, 2 = black pixel
export default function PixelSmiley({ color, scale = 2.2 }: { color: string, scale?: number }) {
  const grid = [
    [0,0,0,2,2,2,2,0,0,0],
    [0,0,2,1,1,1,1,2,0,0],
    [0,2,1,1,1,1,1,1,2,0],
    [2,1,1,2,1,1,2,1,1,2],
    [2,1,1,2,1,1,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,2,1,2],
    [0,2,1,2,2,2,2,1,2,0],
    [0,0,2,1,1,1,1,2,0,0],
    [0,0,0,2,2,2,2,0,0,0],
  ];
  const size = scale;
  const dimension = 10 * size;
  return (
    <svg width={dimension} height={dimension} viewBox={`0 0 ${dimension} ${dimension}`}>
      {grid.map((row, ri) =>
        row.map((cell, ci) => {
          if (cell === 0) return null;
          return (
            <rect
              key={`${ri}-${ci}`}
              x={ci * size}
              y={ri * size}
              width={size}
              height={size}
              fill={cell === 2 ? "#111" : color}
            />
          );
        })
      )}
    </svg>
  );
}
