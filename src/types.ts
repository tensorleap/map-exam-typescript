export interface Edge {
  from: number;
  to: number;
}

export interface Vertex {
  id: number;
  content: string;
  x: number;
  y: number;
}

export interface EdgesAndVertices {
  edges: Edge[],
  vertices: Vertex[],
}
