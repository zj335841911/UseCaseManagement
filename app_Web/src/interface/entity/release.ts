/**
 * 发布
 *
 * @export
 * @interface Release
 */
export interface Release {

    /**
     * 完成的需求
     *
     * @returns {*}
     * @memberof Release
     */
    stories?: any;

    /**
     * 里程碑
     *
     * @returns {*}
     * @memberof Release
     */
    marker?: any;

    /**
     * ID
     *
     * @returns {*}
     * @memberof Release
     */
    id?: any;

    /**
     * 运行数据库
     *
     * @returns {*}
     * @memberof Release
     */
    sqlid?: any;

    /**
     * 遗留的Bug
     *
     * @returns {*}
     * @memberof Release
     */
    leftbugs?: any;

    /**
     * 解决的Bug
     *
     * @returns {*}
     * @memberof Release
     */
    bugs?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof Release
     */
    deleted?: any;

    /**
     * 消息通知用户
     *
     * @returns {*}
     * @memberof Release
     */
    noticeusers?: any;

    /**
     * 重新构建
     *
     * @returns {*}
     * @memberof Release
     */
    rebuild?: any;

    /**
     * 发布名称
     *
     * @returns {*}
     * @memberof Release
     */
    name?: any;

    /**
     * 发布日期
     *
     * @returns {*}
     * @memberof Release
     */
    date?: any;

    /**
     * 状态
     *
     * @returns {*}
     * @memberof Release
     */
    status?: any;

    /**
     * 运行模式
     *
     * @returns {*}
     * @memberof Release
     */
    releasetype?: any;

    /**
     * 子状态
     *
     * @returns {*}
     * @memberof Release
     */
    substatus?: any;

    /**
     * 后台体系
     *
     * @returns {*}
     * @memberof Release
     */
    backgroundid?: any;

    /**
     * 描述
     *
     * @returns {*}
     * @memberof Release
     */
    desc?: any;

    /**
     * 附件
     *
     * @returns {*}
     * @memberof Release
     */
    files?: any;

    /**
     * 系统应用
     *
     * @returns {*}
     * @memberof Release
     */
    frontapplication?: any;

    /**
     * 产品名称
     *
     * @returns {*}
     * @memberof Release
     */
    productname?: any;

    /**
     * 构建者
     *
     * @returns {*}
     * @memberof Release
     */
    builder?: any;

    /**
     * 版本
     *
     * @returns {*}
     * @memberof Release
     */
    buildname?: any;

    /**
     * 打包日期
     *
     * @returns {*}
     * @memberof Release
     */
    builddate?: any;

    /**
     * 产品
     *
     * @returns {*}
     * @memberof Release
     */
    product?: any;

    /**
     * 版本
     *
     * @returns {*}
     * @memberof Release
     */
    build?: any;

    /**
     * 平台/分支
     *
     * @returns {*}
     * @memberof Release
     */
    branch?: any;
}