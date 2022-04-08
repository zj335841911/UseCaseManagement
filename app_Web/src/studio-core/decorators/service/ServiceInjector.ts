import { serviceData } from './ServiceData';

/**
 * 服务注入器
 *
 * @export
 * @param {string} name
 * @param {string} [module]
 * @returns {*}
 */
export function ServiceInjector(name: string, module?: string): any {
    /**
     * 装饰器处理
     */
    return function (target: any, fileName: string) {
        const service = serviceData.get(name, module);
        if (service) {
            target[fileName] = service;
        }
    };
}
