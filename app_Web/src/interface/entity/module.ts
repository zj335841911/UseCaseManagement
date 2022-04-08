/**
 * 模块
 *
 * @export
 * @interface Module
 */
export interface Module {

    /**
     * 所属根
     *
     * @returns {*}
     * @memberof Module
     */
    root?: any;

    /**
     * 级别
     *
     * @returns {*}
     * @memberof Module
     */
    grade?: any;

    /**
     * 类型
     *
     * @returns {*}
     * @memberof Module
     */
    type?: any;

    /**
     * 模块名称
     *
     * @returns {*}
     * @memberof Module
     */
    name?: any;

    /**
     * 排序
     *
     * @returns {*}
     * @memberof Module
     */
    order?: any;

    /**
     * 负责人
     *
     * @returns {*}
     * @memberof Module
     */
    owner?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof Module
     */
    id?: any;

    /**
     * 数据选择排序
     *
     * @returns {*}
     * @memberof Module
     */
    orderpk?: any;

    /**
     * 收藏者
     *
     * @returns {*}
     * @memberof Module
     */
    collector?: any;

    /**
     * 简称
     *
     * @returns {*}
     * @memberof Module
     */
    ibizshort?: any;

    /**
     * 路径
     *
     * @returns {*}
     * @memberof Module
     */
    path?: any;

    /**
     * 部门标识
     *
     * @returns {*}
     * @memberof Module
     */
    mdeptid?: any;

    /**
     * 组织标识
     *
     * @returns {*}
     * @memberof Module
     */
    orgid?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof Module
     */
    deleted?: any;

    /**
     * 上级模块
     *
     * @returns {*}
     * @memberof Module
     */
    parentname?: any;

    /**
     * 平台/分支
     *
     * @returns {*}
     * @memberof Module
     */
    branch?: any;

    /**
     * 上级模块
     *
     * @returns {*}
     * @memberof Module
     */
    parent?: any;
}