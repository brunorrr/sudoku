import { Config } from "./config.interface";

export class ConfigHelper {
    initConfigs(configs: Config): Config {
        const defaultConfigs = this.getDefaultConfigs();
        return {
            grid: {
                backgroundColor: configs.grid?.backgroundColor || defaultConfigs.grid.backgroundColor
            }
        }; 
    }

    getDefaultConfigs(): Config {
        return {
            grid: {
                backgroundColor: 'red'
            }
        };
    }
}