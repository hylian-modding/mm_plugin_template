import {IPlugin, IModLoaderAPI} from 'modloader64_api/IModLoaderAPI';
import * as API from "MajorasMask/API/Imports";
import {InjectCore} from 'modloader64_api/CoreInjection';

class mm_plugin_template implements IPlugin{

    ModLoader!: IModLoaderAPI;
    pluginName?: string | undefined;
    @InjectCore()
    core!: API.IMMCore;

    preinit(): void {
    }
    init(): void {
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
    }

}

module.exports = mm_plugin_template;