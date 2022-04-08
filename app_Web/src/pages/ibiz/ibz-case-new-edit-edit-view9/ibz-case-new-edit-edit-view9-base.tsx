import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditView9Base } from '@/studio-core';
import IbzCaseService from '@/service/ibz-case/ibz-case-service';
import IbzCaseAuthService from '@/authservice/ibz-case/ibz-case-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import IbzCaseUIService from '@/uiservice/ibz-case/ibz-case-ui-service';

/**
 * 用例库用例编辑视图（创建编辑）视图基类
 *
 * @export
 * @class IbzCaseNewEditEditView9Base
 * @extends {EditView9Base}
 */
export class IbzCaseNewEditEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseNewEditEditView9Base
     */
    protected appDeName: string = 'ibzcase';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseNewEditEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseNewEditEditView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseNewEditEditView9Base
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzCaseService}
     * @memberof IbzCaseNewEditEditView9Base
     */
    protected appEntityService: IbzCaseService = new IbzCaseService;

    /**
     * 实体权限服务对象
     *
     * @type IbzCaseUIService
     * @memberof IbzCaseNewEditEditView9Base
     */
    public appUIService: IbzCaseUIService = new IbzCaseUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzCaseNewEditEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.ibzcase.views.newediteditview9.caption',
        srfTitle: 'entities.ibzcase.views.newediteditview9.title',
        srfSubTitle: 'entities.ibzcase.views.newediteditview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzCaseNewEditEditView9Base
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
     * @memberof IbzCaseNewEditEditView9Base
     */
	protected viewtag: string = '5a2461765fd92788e6946206d6baec7e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzCaseNewEditEditView9Base
     */ 
    protected viewName: string = 'IbzCaseNewEditEditView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzCaseNewEditEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzCaseNewEditEditView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzCaseNewEditEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzcase',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzCaseNewEditEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzCaseNewEditEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzCaseNewEditEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof IbzCaseNewEditEditView9Base
     */
    protected viewMounted(): void {
        if (this.panelState) {
            this.panelState.subscribe((res:any) => {
                if (Object.is(res.tag,'meditviewpanel')) {
                    if (Object.is(res.action,'save')) {
                        this.viewState.next({ tag:'form', action: 'save', data:res.data});
                    }
                    if (Object.is(res.action,'remove')) {
                        this.viewState.next({ tag:'form', action: 'remove', data:res.data});
                    }
                }
            });
        }
    }


}