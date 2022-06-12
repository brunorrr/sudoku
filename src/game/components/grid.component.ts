import { Grid } from "src/shared/config/config.interface";
import { Cell, HouseModel } from "../models/house.model";

export class GridComponent {

    private constructor(private ctx: CanvasRenderingContext2D, private configs: Grid, private houses:HouseModel[]) {
        if(houses.length !== 9) {
            throw new Error(`The Grid must have exactly 9 houses, but it has ${houses.length}`);
        }
    }

    public static getNewInstance(ctx: CanvasRenderingContext2D, config: Grid, cells:Cell[]): GridComponent {
        const housesArray: HouseModel[] = [];
        for(let cellIndex = 0; cellIndex < 81 ; cellIndex += 9) {
            const house: HouseModel = new HouseModel(cells.slice(cellIndex, cellIndex + 9));
            housesArray.push(house);
        }
        return new GridComponent(ctx, config, housesArray);
    }

    initGrid() {
        this.ctx.fillStyle = this.configs.backgroundColor;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.houses.forEach((house: HouseModel, houseIndex:number) => {
            house.cells.forEach((cell: Cell, cellIndex: number) => this.initCell(cell, houseIndex, cellIndex));
            this.initHouse(houseIndex);
        });
    }

    private initHouse(position: number) {
        const [houseX, houseY] = this.getHouseCoordinates(position);

        this.ctx.beginPath();
        this.ctx.lineWidth = this.configs.houseBorderThickness;
        this.ctx.strokeStyle = this.configs.houseBorderColor;
        this.ctx.rect(
            houseX,
            houseY,
            (this.ctx.canvas.width / 3),
            (this.ctx.canvas.height / 3));
        this.ctx.stroke();
    }

    private initCell(cell: Cell, housePosition: number, cellPosition: number) {
        const [cellX, cellY] = this.getCellCoordinates(housePosition, cellPosition);

        this.ctx.font = '40px Arial';
        this.ctx.fillStyle = 'black'
        this.ctx.fillText(
            cell?.toString() || '',
            this.ctx.canvas.width / 30 + cellX,
            this.ctx.canvas.width / 12 + cellY);

        this.ctx.beginPath();
        this.ctx.lineWidth = this.configs.cellBorderThickness;
        this.ctx.strokeStyle = this.configs.cellBorderColor;
        this.ctx.rect(
            cellX,
            cellY,
            (this.ctx.canvas.width / 9),
            (this.ctx.canvas.height / 9)
        );
        this.ctx.stroke();
    }

    private getHouseCoordinates(position: number): [number, number] {
        return [
            Math.floor(position / 3) * (this.ctx.canvas.height / 3),
            (position % 3) * (this.ctx.canvas.height / 3)
        ];
    }

    private getCellCoordinates(housePosition: number, cellPosition: number): [number, number] {
        const [houseX, houseY] = this.getHouseCoordinates(housePosition);
        return [
            houseX + (Math.floor(cellPosition / 3) * (this.ctx.canvas.height / 9)),
            houseY + ((cellPosition % 3) * (this.ctx.canvas.height / 9))
        ];
    }

}