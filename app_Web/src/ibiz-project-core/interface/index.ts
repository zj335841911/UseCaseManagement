import { Action } from '@/interface/entity/action';
import { History } from '@/interface/entity/history';

/**
 * Action接口扩展
 *
 * @export
 * @interface ActionItem
 * @extends {Action}
 */
export interface ActionItem extends Action {
    /**
     * 是否已展开历史记录
     *
     * @type {boolean}
     * @memberof ActionItem
     */
    expand?: boolean;
    /**
     * 是否已经加载子数据
     *
     * @type {boolean}
     * @memberof ActionItem
     */
    isLoadedChildren?: boolean;
    /**
     * 对象类型文本值
     *
     * @type {string}
     * @memberof ActionItem
     */
    objectTypeText?: string;
    /**
     * 行为类型文本值
     *
     * @type {string}
     * @memberof ActionItem
     */
    actionText?: string;
    /**
     * 历史记录数据
     *
     * @type {HistoryItem}
     * @memberof ActionItem
     */
    children?: HistoryItem[];
    /**
     * 历史记录数据类型
     *
     * @type {string}
     * @memberof ActionItem
     */
    actiontype?: string;
}

/**
 * History接口扩展
 *
 * @export
 * @interface HistoryItem
 * @extends {History}
 */
export interface HistoryItem extends History {

}