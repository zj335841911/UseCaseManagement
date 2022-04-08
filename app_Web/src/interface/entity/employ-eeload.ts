/**
 * 员工负载表
 *
 * @export
 * @interface EmployEeload
 */
export interface EmployEeload {

    /**
     * 主键
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    id?: any;

    /**
     * 任务名
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    name?: any;

    /**
     * 任务数
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    taskcnt?: any;

    /**
     * 项目编号
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    project?: any;

    /**
     * 项目
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    projectname?: any;

    /**
     * 总任务数
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    totaltaskcnt?: any;

    /**
     * 总工时
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    totalleft?: any;

    /**
     * 剩余工时
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    left?: any;

    /**
     * 工作负载
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    workload?: any;

    /**
     * 指派给
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    assignedto?: any;

    /**
     * 部门
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    dept?: any;

    /**
     * 属性
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    begin?: any;

    /**
     * 结束
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    end?: any;

    /**
     * 工作日天数
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    workday?: any;

    /**
     * 是否指派
     *
     * @returns {*}
     * @memberof EmployEeload
     */
    assign?: any;
}