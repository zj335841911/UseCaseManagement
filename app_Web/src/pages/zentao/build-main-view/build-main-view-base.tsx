import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
import BuildAuthService from '@/authservice/build/build-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import BuildUIService from '@/uiservice/build/build-ui-service';

/**
 * 版本编辑视图视图基类
 *
 * @export
 * @class BuildMainViewBase
 * @extends {EditViewBase}
 */
export class BuildMainViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BuildMainViewBase
     */
    protected appDeName: string = 'build';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BuildMainViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BuildMainViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof BuildMainViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof BuildMainViewBase
     */
    protected appEntityService: BuildService = new BuildService;

    /**
     * 实体权限服务对象
     *
     * @type BuildUIService
     * @memberof BuildMainViewBase
     */
    public appUIService: BuildUIService = new BuildUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BuildMainViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'build',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BuildMainViewBase
	 */
    protected customViewParams: any = {
        'objecttype': {
            isRawValue: true,
            value: 'build',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof BuildMainViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BuildMainViewBase
     */
    protected model: any = {
        srfCaption: 'entities.build.views.mainview.caption',
        srfTitle: 'entities.build.views.mainview.title',
        srfSubTitle: 'entities.build.views.mainview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BuildMainViewBase
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
     * @memberof BuildMainViewBase
     */
	protected viewtag: string = '4754e81c870c007c624c850adffa3de9';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BuildMainViewBase
     */ 
    protected viewName: string = 'BuildMainView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BuildMainViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BuildMainViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BuildMainViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'build',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildMainViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildMainViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BuildMainViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}