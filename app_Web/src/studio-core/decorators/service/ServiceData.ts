class ServiceData {
    /**
     * 全局服务
     *
     * @private
     * @type {*}
     * @memberof ServiceData
     */
    private readonly service: any = {};

    /**
     * 模块服务
     *
     * @private
     * @type {*}
     * @memberof ServiceData
     */
    private readonly modules: any = {};

    /**
     * 新增服务
     *
     * @param {*} service
     * @param {string} name
     * @param {string} [module]
     * @returns {*}
     * @memberof ServiceData
     */
    public add(service: any, name: string, module?: string): any {
        if (module && !isEmpty(module)) {
            const m = this.modules[module];
            if (m && !m[name]) {
                m[name] = service;
            }
        } else if (!this.service[name]) {
            this.service[name] = service;
        }
    }

    /**
     * 获取服务
     *
     * @param {string} name
     * @param {string} [module]
     * @returns {*}
     * @memberof ServiceData
     */
    public get(name: string, module?: string): any {
        if (module && !isEmpty(module)) {
            const m = this.modules[module];
            if (m) {
                return m[name];
            }
        }
        return this.service[name];
    }
}
// 导出实例
export const serviceData = new ServiceData();
