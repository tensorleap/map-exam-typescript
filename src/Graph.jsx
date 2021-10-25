import './Graph.css'

export function Graph({edges, vertices}) {
  return (
    <div className="graph-container">
      <h4>Vertices</h4>
      <pre>
        {JSON.stringify(vertices, null, 2)}
      </pre>
      <h4>Edges</h4>
      <pre>
        {JSON.stringify(edges, null, 2)}
      </pre>
    </div>
  )

}
