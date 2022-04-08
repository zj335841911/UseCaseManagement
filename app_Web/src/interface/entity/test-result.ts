/**
 * 测试结果
 *
 * @export
 * @interface TestResult
 */
export interface TestResult {

    /**
     * 最后执行人
     *
     * @returns {*}
     * @memberof TestResult
     */
    lastrunner?: any;

    /**
     * 步骤结果
     *
     * @returns {*}
     * @memberof TestResult
     */
    stepresults?: any;

    /**
     * 测试结果
     *
     * @returns {*}
     * @memberof TestResult
     */
    caseresult?: any;

    /**
     * 结果文件
     *
     * @returns {*}
     * @memberof TestResult
     */
    xml?: any;

    /**
     * 属性
     *
     * @returns {*}
     * @memberof TestResult
     */
    task?: any;

    /**
     * 持续时间
     *
     * @returns {*}
     * @memberof TestResult
     */
    duration?: any;

    /**
     * 测试时间
     *
     * @returns {*}
     * @memberof TestResult
     */
    date?: any;

    /**
     * 编号
     *
     * @returns {*}
     * @memberof TestResult
     */
    id?: any;

    /**
     * 用例版本
     *
     * @returns {*}
     * @memberof TestResult
     */
    version?: any;

    /**
     * 相关需求
     *
     * @returns {*}
     * @memberof TestResult
     */
    story?: any;

    /**
     * 用例名称
     *
     * @returns {*}
     * @memberof TestResult
     */
    title?: any;

    /**
     * 所属模块
     *
     * @returns {*}
     * @memberof TestResult
     */
    modulename?: any;

    /**
     * 所属模块
     *
     * @returns {*}
     * @memberof TestResult
     */
    module?: any;

    /**
     * 前置条件
     *
     * @returns {*}
     * @memberof TestResult
     */
    precondition?: any;

    /**
     * 所属产品
     *
     * @returns {*}
     * @memberof TestResult
     */
    product?: any;

    /**
     * 构建任务
     *
     * @returns {*}
     * @memberof TestResult
     */
    job?: any;

    /**
     * 用例
     *
     * @returns {*}
     * @memberof TestResult
     */
    ibizcase?: any;

    /**
     * 测试执行
     *
     * @returns {*}
     * @memberof TestResult
     */
    run?: any;

    /**
     * 代码编译
     *
     * @returns {*}
     * @memberof TestResult
     */
    compile?: any;
}