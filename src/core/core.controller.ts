import Game from "../game/game.controller";
import { Config } from "../shared/config/config.interface";

export default class Sudoku {

    private game: Game;

    constructor(private ctx: CanvasRenderingContext2D, private customOptions: Config) {
        this.game = new Game(this.ctx, this.customOptions);
        this.initialize();
    }
    
    private initialize() {
        this.game.startNewGame();
    }
}