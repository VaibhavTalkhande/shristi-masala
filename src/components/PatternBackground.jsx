// src/components/PatternBackground.tsx

const PatternBackground = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="flowerPattern"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        >
          <g transform="translate(50 50)">
            {/* Top Petal */}
            <ellipse cx="0" cy="-15" rx="6" ry="10" fill="#f9eded" />
            {/* Right Petal */}
            <ellipse cx="15" cy="0" rx="6" ry="10" transform="rotate(90 15 0)" fill="#f9eded" />
            {/* Bottom Petal */}
            <ellipse cx="0" cy="15" rx="6" ry="10" transform="rotate(180 0 15)" fill="#f9eded" />
            {/* Left Petal */}
            <ellipse cx="-15" cy="0" rx="6" ry="10" transform="rotate(270 -15 0)" fill="#f9eded" />
          </g>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#flowerPattern)" />
    </svg>
  );
};

export default PatternBackground;
