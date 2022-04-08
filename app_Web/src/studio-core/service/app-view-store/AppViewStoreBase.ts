/**
 * 应用视图仓库基类
 *
 * @export
 * @class AppViewStoreBase
 */
export class AppViewStoreBase {
    /**
     * 已实例化非嵌入级视图，根据实例化顺序排序
     *
     * @type {any[]}
     * @memberof AppViewStoreBase
     */
    public readonly viewList: any[] = [];

    /**
     * 添加视图
     *
     * @param {*} view
     * @memberof AppViewStoreBase
     */
    public push(view: any): void {
        this.viewList.push(view);
    }

    /**
     * 删除最后视图
     *
     * @param {*} [view]
     * @memberof AppViewStoreBase
     */
    public pop(view?: any): void {
        if (view) {
            const i = this.viewList.findIndex((item: any) => item.viewtag === view.viewtag);
            if (i !== -1) {
                this.viewList.splice(i, 1);
            }
        } else {
            this.viewList.pop();
        }
    }

    /**
     * 根据缓存下标跳转位置
     *
     * @param {number} index
     * @memberof AppViewStoreBase
     */
    public jumpByIndex(index: number): void {
        if (index > -1) {
            this.viewList.splice(index, this.viewList.length - 1);
        }
    }

    /**
     * 重置路由缓存
     *
     * @memberof AppViewStoreBase
     */
    public reset(): void {
        this.viewList.clearAll();
    }

    /**
     * 根据视图标识查找
     *
     * @param {string} tag
     * @returns {*}
     * @memberof AppViewStoreBase
     */
    public findByTag(tag: string): any {
        return this.viewList.find((item: any) => item.viewtag === tag);
    }

    /**
     * 根据视图标识查找父
     *
     * @param {string} tag
     * @returns {*}
     * @memberof AppViewStoreBase
     */
    public findParentByTag(tag: string): any {
        const i = this.viewList.findIndex((item: any) => item.viewtag === tag);
        if (i !== -1 && i > 0) {
            return this.viewList[i - 1];
        }
    }
}
