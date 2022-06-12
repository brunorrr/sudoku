export type Cell = (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined);

export class HouseModel {

    constructor(public cells: Cell[]) {
        if(cells.length !== 9) {
            throw new Error(`The House must have exactly 9 cells, but it has ${cells.length}`);
        }
    }
}