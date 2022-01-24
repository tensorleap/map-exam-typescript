import './Graph.css'
import {EdgesAndVertices} from "./types";

export function Graph({edges, vertices}: EdgesAndVertices) {
  return (
    <div className="graph-container">
      { /* replace this code with you own */ }
      <h4>Vertices</h4>
      <pre>
        {JSON.stringify(vertices, null, 2)}
      </pre>
      <h4>Edges</h4>
      <pre>
        {JSON.stringify(edges, null, 2)}
      </pre>
      { /* ---------------------- */ }
    </div>
  )

}
