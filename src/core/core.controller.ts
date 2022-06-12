import { Cell } from "src/game/models/house.model";
import Game from "../game/game.controller";
import { Config } from "../shared/config/config.interface";

export default class Sudoku {

    private game: Game;

    constructor(private ctx: CanvasRenderingContext2D, private customOptions: Config) {
        this.game = new Game(this.ctx, this.customOptions);
        this.initialize();
    }
    
    private initialize() {
        const cells: Cell[] = [undefined,undefined,undefined,3,undefined,2,9,undefined,5,undefined,undefined,9,6,4,undefined,7,undefined,undefined,undefined,1,undefined,undefined,undefined,undefined,undefined,undefined,2,undefined,5,undefined,undefined,undefined,undefined,undefined,3,6,2,undefined,3,8,6,5,undefined,7,9,9,6,1,2,undefined,7,undefined,4,8,4,undefined,2,undefined,undefined,undefined,undefined,undefined,7,1,7,undefined,5,2,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,4,6,undefined,undefined];
        this.game.startNewGame(cells);
    }
}