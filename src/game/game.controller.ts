import { Config } from "src/shared/config/config.interface";
import { ConfigHelper } from "../shared/config/config.helper";
import { GridComponent } from "./components/grid.component";
import { Cell } from "./models/house.model";

export default class Game {

    private readonly configHelper: ConfigHelper = new ConfigHelper();
    private gridComponent: GridComponent | undefined;

    constructor(private ctx: CanvasRenderingContext2D, private configs: Config) {
        this.configs = this.configHelper.initConfigs(configs);
    }
    
    startNewGame(cells: Cell[]) {
        if(!cells || cells.length !== 81) {
            throw new Error(`You must provide exactly 81 cells with their values, but you provided ${cells?.length || 0}`);
        }
        this.gridComponent = GridComponent.getNewInstance(this.ctx, this.configs.grid, cells);
        this.gridComponent.initGrid();
    }


}