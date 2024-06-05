import { useState } from "react";
import styles from "./App.module.css";
import { getMockDataInDistanceBuckets, mockData } from "./data";
import { TrackWidthMap } from "./track-width/TrackWidthMap";
import { TrackWidthScatterplot } from "./track-width/TrackWidthScatterplot";

function App() {
  const [highlightDistance, setHighlightDistance] = useState<
    [number, number] | null
  >(null);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  const data = getMockDataInDistanceBuckets(20).map((bucket) => {
    const maxDeviation = Math.max(...bucket.data.map((d) => d.deviation));
    const minDeviation = Math.min(...bucket.data.map((d) => d.deviation));
    const distance = bucket.start;

    return {
      distance,
      maxDeviation,
      minDeviation,
    };
  });

  return (
    <>
      <h1 className={styles.routeTitle}>Oslo - Larvik</h1>
      <TrackWidthScatterplot
        data={data}
        setHighlightDistance={setHighlightDistance}
        setHighlightIndex={setHighlightIndex}
        highlightIndex={highlightIndex}
      />
      <TrackWidthMap data={mockData} highlightDistance={highlightDistance} />
    </>
  );
}

export default App;
