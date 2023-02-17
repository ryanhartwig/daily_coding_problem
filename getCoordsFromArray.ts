export const getCoordsFromArray = (index: number, columns: number): [number, number] => [
    index % columns,
    Math.floor(index / columns)
]

export const getIndexFromCoords = (x: number, y: number, columns: number) => x + (y * columns);