import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core/decorators/VueLifeCycleProcessing';
import { StudioViewStyle2Base } from '../studio-view-style2/studio-view-style2-base';
import './studio-embed-view-style2.less';

/**
 * 嵌入视图布局容器
 *
 * @export
 * @class StudioEmbedViewStyle2
 * @extends {Vue}
 */
@Component({})
@VueLifeCycleProcessing()
export class StudioEmbedViewStyle2 extends StudioViewStyle2Base {
    /**
     * 计算容器样式
     *
     * @protected
     * @param {{ [str: string]: boolean }} [classNames] 样式名称对象
     * @returns {{ [str: string]: boolean }}
     * @memberof StudioEmbedViewStyle2
     */
    protected getContainerClass(classNames?: { [str: string]: boolean }): { [str: string]: boolean } {
        return super.getContainerClass({
            'embed-view-style2': true,
        });
    }
}
