// Decorative SVG palm leaves with soft sway
export const PalmDecor = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 200 300"
    className={`${className} ${flip ? "scale-x-[-1]" : ""} animate-sway pointer-events-none select-none`}
    fill="none"
    aria-hidden
  >
    <g opacity="0.55">
      <path d="M100 290 Q95 200 90 100 Q85 50 100 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {Array.from({ length: 9 }).map((_, i) => {
        const y = 40 + i * 28;
        const len = 70 - i * 4;
        return (
          <g key={i}>
            <path
              d={`M${100 - i * 0.5} ${y} Q${50 - i * 2} ${y - 10} ${100 - len} ${y - 30}`}
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="currentColor"
              fillOpacity="0.18"
            />
            <path
              d={`M${100 + i * 0.5} ${y} Q${150 + i * 2} ${y - 10} ${100 + len} ${y - 30}`}
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="currentColor"
              fillOpacity="0.18"
            />
          </g>
        );
      })}
    </g>
  </svg>
);
