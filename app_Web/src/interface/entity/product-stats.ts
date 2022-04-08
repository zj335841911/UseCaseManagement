/**
 * 产品统计
 *
 * @export
 * @interface ProductStats
 */
export interface ProductStats {

    /**
     * 产品代号
     *
     * @returns {*}
     * @memberof ProductStats
     */
    code?: any;

    /**
     * 产品编号
     *
     * @returns {*}
     * @memberof ProductStats
     */
    id?: any;

    /**
     * 已完成的需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    finishedstorycnt?: any;

    /**
     * 已发布需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    releasedstorycnt?: any;

    /**
     * 严重bug比
     *
     * @returns {*}
     * @memberof ProductStats
     */
    importantbugpercent?: any;

    /**
     * 未完成关联项目数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    undoneresprojectcnt?: any;

    /**
     * 指派给我的Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    assigntomebugcnt?: any;

    /**
     * 已删除
     *
     * @returns {*}
     * @memberof ProductStats
     */
    deleted?: any;

    /**
     * 是否置顶
     *
     * @returns {*}
     * @memberof ProductStats
     */
    istop?: any;

    /**
     * 关联项目数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    resprojectcnt?: any;

    /**
     * 所有Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    bugcnt?: any;

    /**
     * 已消耗工时
     *
     * @returns {*}
     * @memberof ProductStats
     */
    haveconsumed?: any;

    /**
     * 产品类型
     *
     * @returns {*}
     * @memberof ProductStats
     */
    type?: any;

    /**
     * 未开始需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    waitstorycnt?: any;

    /**
     * 需求所提bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    bugstory?: any;

    /**
     * 需求总数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    storycnt?: any;

    /**
     * 产品名称
     *
     * @returns {*}
     * @memberof ProductStats
     */
    name?: any;

    /**
     * 重要的Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    importantbugcnt?: any;

    /**
     * 昨天关闭Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    yesterdayclosedbugcnt?: any;

    /**
     * 状态
     *
     * @returns {*}
     * @memberof ProductStats
     */
    status?: any;

    /**
     * 昨天解决Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    yesterdayresolvedbugcnt?: any;

    /**
     * 开发中需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    developingstorycnt?: any;

    /**
     * 激活需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    activestorycnt?: any;

    /**
     * 未关闭Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    notclosedbugcnt?: any;

    /**
     * 维护中发布数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    normalreleasecnt?: any;

    /**
     * 产品排序
     *
     * @returns {*}
     * @memberof ProductStats
     */
    order1?: any;

    /**
     * 当前项目
     *
     * @returns {*}
     * @memberof ProductStats
     */
    currproject?: any;

    /**
     * 测试中需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    testingstorycnt?: any;

    /**
     * 计划总数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    productplancnt?: any;

    /**
     * 发布总数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    releasecnt?: any;

    /**
     * 昨天确认Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    yesterdayconfirmbugcnt?: any;

    /**
     * 已延期
     *
     * @returns {*}
     * @memberof ProductStats
     */
    postponedprojectcnt?: any;

    /**
     * 未过期计划数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    unendproductplancnt?: any;

    /**
     * 解决Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    resolvedbugcnt?: any;

    /**
     * 已计划需求数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    plannedstorycnt?: any;

    /**
     * 未确认Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    unconfirmbugcnt?: any;

    /**
     * 未解决Bug数
     *
     * @returns {*}
     * @memberof ProductStats
     */
    activebugcnt?: any;
}