import { useEffect, useRef, useState } from "react";
import { useApp } from "../Contexts/AppContext";

export const LineChart = () => {
  const { weatherData } = useApp();
  const data = weatherData?.daily?.temperature_2m_max;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [path, setPath] = useState<string | null>(null);

  const updateDimensions = () => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [data]);

  useEffect(() => {
    if (data && dimensions.width > 0 && dimensions.height > 0) {
      const { width, height } = dimensions;
      const topPadding = 20;
      const bottomPadding = 20;
      const chartHeight = height - topPadding - bottomPadding;

      const max = Math.max(...data);
      const min = Math.min(...data);
      const pointGap = width / (data.length - 1);

      const points = data.map((temp, idx) => {
        const x = idx * pointGap;
        const y = topPadding + (1 - (temp - min) / (max - min)) * chartHeight;
        return `${x},${y}`;
      });

      setPath(`M ${points.join(" L ")}`);
    }
  }, [data, dimensions]);

  if (!data || data.length === 0) {
    return <p className="text-sm text-gray-500">Nincs elérhető adat a grafikonhoz.</p>;
  }

  return (
    <div
      ref={containerRef}
      className="border-white rounded-md border-2 relative w-full h-52"
    >
      <div className="absolute border border-white h-[0.5px] opacity-50 w-full top-1/2" />
      <div className="absolute border border-white h-[0.5px] opacity-50 w-full top-5" />
      <div className="absolute border border-white h-[0.5px] opacity-50 w-full bottom-5" />

      {path && (
        <svg width={dimensions.width} height={dimensions.height} className="stroke-white fill-none">
          <path d={path} strokeWidth={1} />
        </svg>
      )}
    </div>
  );
};
