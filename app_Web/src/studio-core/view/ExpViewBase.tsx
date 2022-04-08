import { ViewBase } from './ViewBase';
import { events } from '../global';

/**
 * 导航视图基类
 *
 * @export
 * @class ExpViewBase
 * @extends {ViewBase}
 */
export class ExpViewBase extends ViewBase {
    /**
     * 应用实体服务
     *
     * @protected
     * @type {*}
     * @memberof ExpViewBase
     */
    protected appEntityService: any;

    /**
     * 视图挂载完毕
     *
     * @protected
     * @memberof ExpViewBase
     */
    protected viewMounted(): void {
        super.viewMounted();
        this.accLocalTags.push(
            this.$acc.commandLocal(
                () => {
                    this.loadModel();
                },
                'update',
                this.appDeName.toUpperCase()
            )
        );
    }

    /**
     * 视图上下文变化
     *
     * @protected
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ExpViewBase
     */
    protected viewDataChange(newVal: any, oldVal: any): void {
        this.loadModel();
    }

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
