import { useMemo } from "react";
import {
  extent,
  interpolateRdYlGn,
  interpolateReds,
  interpolateYlOrBr,
  line,
  scaleLinear,
  scaleSequential,
} from "d3";
import { maxDeviation, minDeviation, totalDistance } from "../data";

const totalWidth = 300;
const totalHeight = 300;
const xPadding = 0;
const yPadding = 0;
const innerWidth = totalWidth - xPadding * 2;
const innerHeight = totalHeight - yPadding * 2;
const circleRadius = 2;

type DataPoint = {
  lat: number;
  lon: number;
  distance: number;
};

export const TrackWidthMap = ({
  data,
  highlightDistance,
}: {
  data: Array<DataPoint>;
  highlightDistance: [number, number] | null;
}) => {
  const { xScale, yScale, barWidth, color, linePath, highlightPath } =
    useMemo(() => {
      const xDomain = extent(data.map((d) => d.lon));
      const yDomain = extent(data.map((d) => d.lat));

      if (xDomain[0] === undefined || yDomain[0] === undefined) {
        throw new Error("xDomain[0] is undefined");
      }

      const xScale = scaleLinear().domain(xDomain).range([0, innerWidth]);
      const yScale = scaleLinear().domain(yDomain).range([innerHeight, 0]);
      const color = scaleSequential(interpolateRdYlGn).domain([1, 0]);
      const lineBuilder = line<DataPoint>()
        .x((d) => xScale(d.lon))
        .y((d) => yScale(d.lat));

      const linePath = lineBuilder(data);

      const highlightStart = highlightDistance?.[0];
      const highlightEnd = highlightDistance?.[1];
      const highlightData =
        highlightStart !== undefined && highlightEnd !== undefined
          ? data.filter(
              (x) => x.distance >= highlightStart && x.distance <= highlightEnd,
            )
          : null;
      const highlightPath = highlightData ? lineBuilder(highlightData) : null;

      return {
        xScale,
        yScale,
        barWidth: innerWidth / data.length - 8,
        color,
        linePath,
        highlightPath,
      };
    }, [data, highlightDistance]);

  return (
    <svg
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      width={totalWidth}
      height={totalHeight}
    >
      <g transform={`translate(${xPadding}, ${yPadding})`}>
        {linePath && (
          <path d={linePath} stroke="white" fill="none" strokeWidth={2} />
        )}
        {highlightPath && (
          <path d={highlightPath} stroke="red" fill="none" strokeWidth={2} />
        )}
      </g>
    </svg>
  );
};
