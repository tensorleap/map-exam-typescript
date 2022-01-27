import "./App.css";
import useResizeObserver from "use-resize-observer";
import { useCallback, useState } from "react";
import { EdgesAndVertices } from "./types";
import { generateData } from "./data";
import { Graph } from "./Graph";

function App() {
  const { ref, width, height } = useResizeObserver();

  const [data, setData] = useState<EdgesAndVertices>();

  const handleGenerateData = useCallback(() => {
    if (width && height) {
      const data = generateData(width, height);
      console.group("data");
      console.log("Edges", data.edges);
      console.log("Vertices", data.vertices);
      console.groupEnd();
      setData(data);
    }
  }, [width, height]);

  return (
    <div className="app-container">
      <div className="top-bar">
        <button onClick={handleGenerateData}>generate data</button>
      </div>
      <div className="main" ref={ref}>
        <Graph edges={data?.edges || []} vertices={data?.vertices || []} />
      </div>
    </div>
  );
}

export default App;
