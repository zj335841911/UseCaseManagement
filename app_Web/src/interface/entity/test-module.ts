/**
 * 测试模块
 *
 * @export
 * @interface TestModule
 */
export interface TestModule {

    /**
     * 类型（story）
     *
     * @returns {*}
     * @memberof TestModule
     */
    type?: any;

    /**
     * path
     *
     * @returns {*}
     * @memberof TestModule
     */
    path?: any;

    /**
     * owner
     *
     * @returns {*}
     * @memberof TestModule
     */
    owner?: any;

    /**
     * 排序值
     *
     * @returns {*}
     * @memberof TestModule
     */
    order?: any;

    /**
     * 逻辑删除标志
     *
     * @returns {*}
     * @memberof TestModule
     */
    deleted?: any;

    /**
     * branch
     *
     * @returns {*}
     * @memberof TestModule
     */
    branch?: any;

    /**
     * collector
     *
     * @returns {*}
     * @memberof TestModule
     */
    collector?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof TestModule
     */
    id?: any;

    /**
     * 叶子模块
     *
     * @returns {*}
     * @memberof TestModule
     */
    isleaf?: any;

    /**
     * 名称
     *
     * @returns {*}
     * @memberof TestModule
     */
    name?: any;

    /**
     * 简称
     *
     * @returns {*}
     * @memberof TestModule
     */
    ibizshort?: any;

    /**
     * grade
     *
     * @returns {*}
     * @memberof TestModule
     */
    grade?: any;

    /**
     * 上级模块
     *
     * @returns {*}
     * @memberof TestModule
     */
    parentname?: any;

    /**
     * 测试
     *
     * @returns {*}
     * @memberof TestModule
     */
    rootname?: any;

    /**
     * 编号
     *
     * @returns {*}
     * @memberof TestModule
     */
    root?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof TestModule
     */
    parent?: any;
}