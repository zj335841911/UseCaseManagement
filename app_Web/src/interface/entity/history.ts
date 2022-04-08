/**
 * 操作历史
 *
 * @export
 * @interface History
 */
export interface History {

    /**
     * 不同
     *
     * @returns {*}
     * @memberof History
     */
    diff?: any;

    /**
     * 字段
     *
     * @returns {*}
     * @memberof History
     */
    field?: any;

    /**
     * 新值
     *
     * @returns {*}
     * @memberof History
     */
    ibiznew?: any;

    /**
     * 旧值
     *
     * @returns {*}
     * @memberof History
     */
    old?: any;

    /**
     * id
     *
     * @returns {*}
     * @memberof History
     */
    id?: any;

    /**
     * 关联日志
     *
     * @returns {*}
     * @memberof History
     */
    action?: any;
}