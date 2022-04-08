import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbzAgentService from '@/service/ibz-agent/ibz-agent-service';
import IbzAgentAuthService from '@/authservice/ibz-agent/ibz-agent-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbzAgentUIService from '@/uiservice/ibz-agent/ibz-agent-ui-service';

/**
 * 代理编辑视图视图基类
 *
 * @export
 * @class IbzAgentMainInfoEditViewBase
 * @extends {EditViewBase}
 */
export class IbzAgentMainInfoEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzAgentMainInfoEditViewBase
     */
    protected appDeName: string = 'ibzagent';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzAgentMainInfoEditViewBase
     */
    protected appDeKey: string = 'ibz_agentid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzAgentMainInfoEditViewBase
     */
    protected appDeMajor: string = 'ibz_agentname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzAgentMainInfoEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzAgentService}
     * @memberof IbzAgentMainInfoEditViewBase
     */
    protected appEntityService: IbzAgentService = new IbzAgentService;

    /**
     * 实体权限服务对象
     *
     * @type IbzAgentUIService
     * @memberof IbzAgentMainInfoEditViewBase
     */
    public appUIService: IbzAgentUIService = new IbzAgentUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzAgentMainInfoEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzAgentMainInfoEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzagent.views.maininfoeditview.caption',
        srfTitle: 'entities.ibzagent.views.maininfoeditview.title',
        srfSubTitle: 'entities.ibzagent.views.maininfoeditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzAgentMainInfoEditViewBase
     */
    protected containerModel: any = {
        view_form: {
            name: 'form',
            type: 'FORM',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzAgentMainInfoEditViewBase
     */
	protected viewtag: string = 'aa5d52066660b94e42ba0e4213af8de9';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzAgentMainInfoEditViewBase
     */ 
    protected viewName: string = 'IbzAgentMainInfoEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzAgentMainInfoEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzAgentMainInfoEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzAgentMainInfoEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzagent',
            majorPSDEField: 'ibzagentname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzAgentMainInfoEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzAgentMainInfoEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzAgentMainInfoEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}