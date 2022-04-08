import { ExpViewBase } from './ExpViewBase';
import { events } from '../global';

/**
 * 分页导航视图基类
 *
 * @export
 * @class TabExpViewBase
 * @extends {ExpViewBase}
 */
export class TabExpViewBase extends ExpViewBase {
    /**
     * 加载模型
     *
     * @protected
     * @memberof AccountInfoBase
     */
    protected async loadModel(): Promise<any> {
        if (this.appEntityService && this.context[this.appDeName]) {
            this.appEntityService.getDataInfo(this.context, {}, false).then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                const { data } = response;
                if (data && data[this.appDeMajor]) {
                    this.engine.computeToolbarState(false, data);
                    this.viewState.next({ tag: 'tabexppanel', action: 'loadmodel', data: data });
                    data[this.appDeName] = data[this.appDeKey];
                    this.$appService.contextStore.setContextData(this.context, this.appDeName, { data });
                    Object.assign(this.model, { dataInfo: data[this.appDeMajor] });
                    // if (this.$route) {
                    //     this.$route.meta.info = this.model.dataInfo;
                    // }
                    this.$appService.navHistory.setCaption({ tag: this.viewtag, info: this.model.dataInfo });
                    this.$emit(events.view.MODEL_LOADED, data);
                }
            });
        }
    }
}
