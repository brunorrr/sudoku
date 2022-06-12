import { Config } from "./config.interface";

export class ConfigHelper {
    initConfigs(configs: Config): Config {
        const defaultConfigs = this.getDefaultConfigs();
        return {
            grid: {
                backgroundColor: configs.grid?.backgroundColor || defaultConfigs.grid.backgroundColor,
                houseBorderColor: configs.grid?.houseBorderColor || defaultConfigs.grid.houseBorderColor,
                houseBorderThickness: configs.grid?.houseBorderThickness || defaultConfigs.grid.houseBorderThickness,
                cellBorderColor: configs.grid?.cellBorderColor || defaultConfigs.grid.cellBorderColor,
                cellBorderThickness: configs.grid?.cellBorderThickness || defaultConfigs.grid.cellBorderThickness,
            }
        }; 
    }

    getDefaultConfigs(): Config {
        return {
            grid: {
                backgroundColor: '#f7f7f7',
                houseBorderColor: 'black',
                houseBorderThickness: 2,
                cellBorderColor: 'gray',
                cellBorderThickness: 1
            }
        };
    }
}