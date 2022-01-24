import { Edge, EdgesAndVertices, Vertex } from "./types";
import faker from "faker";

const MARGIN = 20;

export function generateData(width: number, height: number): EdgesAndVertices {
  const numberOfColumns = getRandomInt(3, 4);

  const columnWidth = (width - 2 * MARGIN) / numberOfColumns;

  const edges = [] as Edge[];
  const vertices = [] as Vertex[];

  let nextVertexId = 1;
  let previousColumnIds = [] as number[];
  for (let column = 0; column < numberOfColumns; column++) {
    const numberOfVerticesInRow = getRandomInt(1, 3);
    const rowWidth = (height - 2 * MARGIN) / numberOfVerticesInRow;
    const columnIds = [] as number[];
    for (
      let vertexRowIndex = 0;
      vertexRowIndex < numberOfVerticesInRow;
      vertexRowIndex++
    ) {
      const id = nextVertexId++;
      columnIds.push(id);
      vertices.push({
        id,
        content: faker.lorem.text(),
        x: MARGIN + columnWidth * column,
        y: MARGIN + rowWidth * vertexRowIndex,
      });
      previousColumnIds.forEach((from) => {
        if (getRandomBoolean()) {
          edges.push({
            from,
            to: id,
          });
        }
      });
    }
    previousColumnIds = columnIds;
  }

  return { edges, vertices };
}

function getRandomInt(max: number, min: number): number {
  return Math.ceil(Math.random() * (max - min)) + min;
}

function getRandomBoolean(): boolean {
  return getRandomInt(0, 3) === 1;
}
