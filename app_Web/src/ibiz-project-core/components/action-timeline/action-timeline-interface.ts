import { Moment } from 'moment';
import { ActionItem } from '@/ibiz-project-core/interface';

/**
 * 动态时间轴项
 *
 * @export
 * @interface ActionTimelineItem
 */
export interface ActionTimelineItem {
    /**
     * 时间
     *
     * @type {Moment}
     * @memberof ActionTimelineItem
     */
    date: Moment;
    /**
     * 时间展示文本
     *
     * @type {string}
     * @memberof ActionTimelineItem
     */
    dateText: string;
    /**
     * 时间展示文本，只小时、分钟
     *
     * @type {string}
     * @memberof ActionTimelineItem
     */
    dateText2: string;
    /**
     * 数据
     *
     * @type {Action}
     * @memberof ActionTimelineItem
     */
    data: ActionItem;
}