# Edges and Vertices

In this project, you will need to implement a react component that renders a "map" of edges and vertices. \
All the data is provided when pressing the _generate data_ button and decribed in the [types.ts](src/types.ts). \
The only file you need to edit is [Graph.jsx](src/Graph.jsx) (and maybe [Graph.css](src/Graph.css) depends on your implementation).

The end result should look like this:
![Screemshot](/example.gif)

## Hints

1. After cloning the project, initialize with `npm install`.
2. Start the development server with `npm start` (this will start a live preview on [http://localhost:3000](http://localhost:3000)).
3. Use the provided `vertex` class to style the vertices.
4. Use the provided `ConnectingLine` component to draw the edges.
5. Note that the vertices height is based on their content (text).
