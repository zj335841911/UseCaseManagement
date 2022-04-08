import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
import ReleaseAuthService from '@/authservice/release/release-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import ReleaseUIService from '@/uiservice/release/release-ui-service';

/**
 * 发布编辑视图视图基类
 *
 * @export
 * @class ReleaseMainInfoViewBase
 * @extends {EditViewBase}
 */
export class ReleaseMainInfoViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainInfoViewBase
     */
    protected appDeName: string = 'release';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainInfoViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainInfoViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainInfoViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof ReleaseMainInfoViewBase
     */
    protected appEntityService: ReleaseService = new ReleaseService;

    /**
     * 实体权限服务对象
     *
     * @type ReleaseUIService
     * @memberof ReleaseMainInfoViewBase
     */
    public appUIService: ReleaseUIService = new ReleaseUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ReleaseMainInfoViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'release',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof ReleaseMainInfoViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainInfoViewBase
     */
    protected model: any = {
        srfCaption: 'entities.release.views.maininfoview.caption',
        srfTitle: 'entities.release.views.maininfoview.title',
        srfSubTitle: 'entities.release.views.maininfoview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainInfoViewBase
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
     * @memberof ReleaseMainInfoViewBase
     */
	protected viewtag: string = '493784309010796dcd5e4839f7e8934f';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainInfoViewBase
     */ 
    protected viewName: string = 'ReleaseMainInfoView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ReleaseMainInfoViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ReleaseMainInfoViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ReleaseMainInfoViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'release',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseMainInfoViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseMainInfoViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ReleaseMainInfoViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}