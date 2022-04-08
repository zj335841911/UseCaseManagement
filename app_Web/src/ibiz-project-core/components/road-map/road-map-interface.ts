import { ProductLife } from '@/interface/entity/product-life';

/**
 * 产品路线图项
 *
 * @export
 * @interface RoadMapItem
 * @extends {ProductLife}
 */
export interface RoadMapItem extends ProductLife {
    /**
     * 文本信息
     *
     * @type {string}
     * @memberof RoadMapInterface
     */
    text: string;
    /**
     * 起始时间
     *
     * @type {string}
     * @memberof RoadMapInterface
     */
    start: string;
    /**
     * 结束时间
     *
     * @type {string}
     * @memberof RoadMapInterface
     */
    end: string;
}