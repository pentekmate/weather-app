import { useEffect, useRef, useState } from "react";
import { useApp } from "../Contexts/AppContext";

export const LineChart = () => {
  const { weatherData } = useApp();
  const data = weatherData?.daily?.temperature_2m_max;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [path, setPath] = useState<string | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  useEffect(() => {
    if (data && dimensions.width > 0 && dimensions.height > 0) {
      const max = Math.max(...data);
      const min = Math.min(...data);
      const { width, height } = dimensions;
      const pointGap = width / (data.length - 1);

      const points = data.map((temp, idx) => {
        const x = idx * pointGap;
        const y = height - ((temp - min) / (max - min)) * height;
        return `${x},${y}`;
      });

      const innerPath = `M ${points.join(" L ")}`;
      setPath(innerPath);
    }
  }, [data, dimensions]);

  if (!data || data.length === 0) {
    return <p className="text-sm text-gray-500">Nincs elérhető adat a grafikonhoz.</p>;
  }

  return (
    <div
      ref={containerRef}
      className="border-white rounded-md border relative w-full h-52"
    >
      <div className="absolute border border-white h-[1px] w-full top-1/2" />
      <div className="absolute border border-white h-[1px] w-full top-20" />
      <div className="absolute border border-white h-[1px] w-full bottom-20" />
      {path && (
        <svg width={dimensions.width} height={dimensions.height} className="stroke-white fill-none">
          <path d={path} strokeWidth={2} />
        </svg>
      )}
    </div>
  );
};
