import { serviceData } from './ServiceData';

/**
 * 服务注入器
 *
 * @export
 * @param {string} name 服务名称
 * @param {string} [module] 模块名称
 * @returns {*}
 */
export function ServiceProvide(name: string, module?: string): any {
    /**
     * 装饰器处理
     */
    return function (target: any) {
        serviceData.add(new target(), name, module);
    };
}
