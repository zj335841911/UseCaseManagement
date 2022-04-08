import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core/decorators/VueLifeCycleProcessing';
import { StudioViewBase } from './studio-view-base';
import './studio-view.less';

/**
 * 嵌入视图布局容器
 *
 * @export
 * @class StudioView
 * @extends {Vue}
 */
@Component({})
@VueLifeCycleProcessing()
export class StudioView extends StudioViewBase {}
