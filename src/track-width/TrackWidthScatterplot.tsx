import { useMemo } from "react";
import { interpolateRdYlGn, scaleLinear, scaleSequential } from "d3";
import { maxDeviation, minDeviation, totalDistance } from "../data";

const totalWidth = 800;
const totalHeight = 200;
const xPadding = 0;
const yPadding = 0;
const innerWidth = totalWidth - xPadding * 2;
const innerHeight = totalHeight - yPadding * 2;

export const TrackWidthScatterplot = ({
  data,
  setHighlightDistance,
  setHighlightIndex,
  highlightIndex,
}: {
  data: Array<{
    distance: number;
    maxDeviation: number;
    minDeviation: number;
  }>;
  setHighlightDistance: (highlightDistance: [number, number] | null) => void;
  setHighlightIndex: (highlightIndex: number | null) => void;
  highlightIndex: number | null;
}) => {
  const { xScale, yScale, barWidth, color, distancePerBar } = useMemo(() => {
    const xDomain = [0, totalDistance];
    const yDomain = [minDeviation - 5, maxDeviation + 5];

    if (xDomain[0] === undefined) {
      throw new Error("xDomain[0] is undefined");
    }

    const xScale = scaleLinear().domain(xDomain).range([0, innerWidth]);
    const yScale = scaleLinear().domain(yDomain).range([innerHeight, 0]);
    const color = scaleSequential(interpolateRdYlGn).domain([1, 0]);

    return {
      xScale,
      yScale,
      barWidth: innerWidth / data.length - 8,
      distancePerBar: totalDistance / data.length,
      color,
    };
  }, [data]);

  console.log(data);

  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      width={totalWidth}
      height={totalHeight}
      shapeRendering="crispEdges"
    >
      <g transform={`translate(${xPadding}, ${yPadding})`}>
        <line
          x1={0}
          x2={innerWidth}
          y1={yScale(0)}
          y2={yScale(0)}
          stroke="white"
          strokeWidth={1}
          strokeDasharray="4 4"
          strokeOpacity={0.5}
        />
        <line
          x1={0}
          x2={innerWidth}
          y1={yScale(maxDeviation)}
          y2={yScale(maxDeviation)}
          stroke={color(1)}
          strokeDasharray="4 4"
          strokeOpacity={0.5}
        />
        <line
          x1={0}
          x2={innerWidth}
          y1={yScale(maxDeviation / 2)}
          y2={yScale(maxDeviation / 2)}
          stroke={color(0.5)}
          strokeDasharray="4 4"
          strokeOpacity={0.5}
        />
        <line
          x1={0}
          x2={innerWidth}
          y1={yScale(minDeviation)}
          y2={yScale(minDeviation)}
          stroke={color(1)}
          strokeDasharray="4 4"
          strokeOpacity={0.5}
        />
        <line
          x1={0}
          x2={innerWidth}
          y1={yScale(minDeviation / 2)}
          y2={yScale(minDeviation / 2)}
          stroke={color(0.5)}
          strokeDasharray="4 4"
          strokeOpacity={0.5}
        />
        {data.map((d, i) => {
          const maxValue = Math.max(d.maxDeviation, 0);
          const minValue = Math.min(d.minDeviation, 0);

          return (
            <rect
              key={d.distance}
              x={xScale(d.distance) + 2}
              y={yScale(maxValue)}
              width={barWidth}
              height={yScale(minValue) - yScale(maxValue)}
              fill={color(
                Math.max(maxValue / maxDeviation, minValue / minDeviation),
              )}
              fillOpacity={highlightIndex === i ? 1 : 0.8}
            />
          );
        })}
      </g>
      <g transform={`translate(${xPadding}, ${yPadding})`}>
        {data.map((d, i) => (
          <rect
            key={d.distance}
            x={xScale(d.distance)}
            y={0}
            width={barWidth + 8}
            height={innerHeight}
            fill="transparent"
            onMouseEnter={() => {
              setHighlightDistance([d.distance, d.distance + distancePerBar]);
              setHighlightIndex(i);
            }}
          />
        ))}
      </g>
    </svg>
  );
};
