import './App.css';
import useResizeObserver from 'use-resize-observer';
import {useCallback, useState} from 'react';
import {EdgesAndVertices} from './types';
import {generateData} from './data';
import {Graph} from './Graph';

function App() {
  const {ref, width, height} = useResizeObserver()

  const [data, setData] = useState<EdgesAndVertices>();

  const handleGenerateData = useCallback(() => {
    if (width && height) {
      setData(generateData(width, height))
    }
  }, [width, height])

  return (
    <div className="app-container">
      <div>
        <button onClick={handleGenerateData}>generate data</button>
      </div>
      <div className='main' ref={ref}>
        <Graph
          edges={data?.edges || []}
          vertices={data?.vertices || []}
        />
      </div>
    </div>
  );
}

export default App;
