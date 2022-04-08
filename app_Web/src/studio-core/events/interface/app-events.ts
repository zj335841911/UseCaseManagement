import { HistoryItem } from '../../service/app-nav-history/AppNavHistoryBase';

/**
 * 事件定义
 *
 * @export
 * @interface AppEvents
 */
export interface AppEvents {
    /**
     * 删除单个历史搜索项
     *
     * @type {HistoryItem}
     * @memberof AppEvents
     */
    'navHistoryItemChange': HistoryItem;
}
