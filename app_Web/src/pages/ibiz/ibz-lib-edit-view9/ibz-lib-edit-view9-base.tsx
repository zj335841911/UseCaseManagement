import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditView9Base } from '@/studio-core';
import IbzLibService from '@/service/ibz-lib/ibz-lib-service';
import IbzLibAuthService from '@/authservice/ibz-lib/ibz-lib-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import IbzLibUIService from '@/uiservice/ibz-lib/ibz-lib-ui-service';

/**
 * 用例库编辑视图视图基类
 *
 * @export
 * @class IbzLibEditView9Base
 * @extends {EditView9Base}
 */
export class IbzLibEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibEditView9Base
     */
    protected appDeName: string = 'ibzlib';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzLibEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzLibEditView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibEditView9Base
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzLibService}
     * @memberof IbzLibEditView9Base
     */
    protected appEntityService: IbzLibService = new IbzLibService;

    /**
     * 实体权限服务对象
     *
     * @type IbzLibUIService
     * @memberof IbzLibEditView9Base
     */
    public appUIService: IbzLibUIService = new IbzLibUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzLibEditView9Base
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'caselib',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzLibEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.ibzlib.views.editview9.caption',
        srfTitle: 'entities.ibzlib.views.editview9.title',
        srfSubTitle: 'entities.ibzlib.views.editview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzLibEditView9Base
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
     * @memberof IbzLibEditView9Base
     */
	protected viewtag: string = '88905fc742e5cee96069f28b5a76f22b';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibEditView9Base
     */ 
    protected viewName: string = 'IbzLibEditView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzLibEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzLibEditView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzLibEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzlib',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof IbzLibEditView9Base
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