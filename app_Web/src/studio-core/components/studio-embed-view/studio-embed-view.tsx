import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core/decorators/VueLifeCycleProcessing';
import { StudioViewBase } from '../studio-view/studio-view-base';
import './studio-embed-view.less';

/**
 * 嵌入视图布局容器
 *
 * @export
 * @class StudioEmbedView
 * @extends {Vue}
 */
@Component({})
@VueLifeCycleProcessing()
export class StudioEmbedView extends StudioViewBase {
    /**
     * 计算容器样式
     *
     * @protected
     * @param {{ [str: string]: boolean }} [classNames] 样式名称对象
     * @returns {{ [str: string]: boolean }}
     * @memberof StudioEmbedView
     */
    protected getContainerClass(classNames?: { [str: string]: boolean }): { [str: string]: boolean } {
        return super.getContainerClass({
            'embed-view': true,
        });
    }
}
