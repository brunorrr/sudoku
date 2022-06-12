import { Config } from "src/shared/config/config.interface";
import { ConfigHelper } from "../shared/config/config.helper";

export default class Game {

    private readonly configHelper: ConfigHelper = new ConfigHelper();

    constructor(private ctx: CanvasRenderingContext2D, private configs: Config) {
        this.configs = this.configHelper.initConfigs(configs);
    }
    
    startNewGame() {
        this.ctx.fillStyle = this.configs.grid.backgroundColor;
        this.ctx.fillRect(0, 0, 100, 100);
    }


}