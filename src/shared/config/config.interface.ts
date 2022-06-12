export interface Config {
    grid: Grid;
}

export interface Grid {
    backgroundColor: string;
    houseBorderColor: string;
    houseBorderThickness: number;
    cellBorderColor: string;
    cellBorderThickness: number;
}