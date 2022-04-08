/**
 * 套件用例
 *
 * @export
 * @interface SuiteCase
 */
export interface SuiteCase {

    /**
     * 虚拟主键
     *
     * @returns {*}
     * @memberof SuiteCase
     */
    id?: any;

    /**
     * 用例版本
     *
     * @returns {*}
     * @memberof SuiteCase
     */
    version?: any;

    /**
     * 测试套件
     *
     * @returns {*}
     * @memberof SuiteCase
     */
    suite?: any;

    /**
     * 用例
     *
     * @returns {*}
     * @memberof SuiteCase
     */
    ibizcase?: any;

    /**
     * 所属产品
     *
     * @returns {*}
     * @memberof SuiteCase
     */
    product?: any;
}