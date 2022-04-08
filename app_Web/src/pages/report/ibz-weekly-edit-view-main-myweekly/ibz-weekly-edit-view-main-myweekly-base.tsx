import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IBZWEEKLYService from '@/service/ibzweekly/ibzweekly-service';
import IBZWEEKLYAuthService from '@/authservice/ibzweekly/ibzweekly-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IBZWEEKLYUIService from '@/uiservice/ibzweekly/ibzweekly-ui-service';

/**
 * 实体2编辑视图视图基类
 *
 * @export
 * @class IbzWeeklyEditViewMainMyweeklyBase
 * @extends {EditViewBase}
 */
export class IbzWeeklyEditViewMainMyweeklyBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    protected appDeName: string = 'ibzweekly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    protected appDeKey: string = 'ibz_weeklyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    protected appDeMajor: string = 'ibz_weeklyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IBZWEEKLYService}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    protected appEntityService: IBZWEEKLYService = new IBZWEEKLYService;

    /**
     * 实体权限服务对象
     *
     * @type IBZWEEKLYUIService
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    public appUIService: IBZWEEKLYUIService = new IBZWEEKLYUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzweekly.views.editviewmainmyweekly.caption',
        srfTitle: 'entities.ibzweekly.views.editviewmainmyweekly.title',
        srfSubTitle: 'entities.ibzweekly.views.editviewmainmyweekly.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
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
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
	protected viewtag: string = '7985d4cefde824cfff112697b07b60c6';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */ 
    protected viewName: string = 'IbzWeeklyEditViewMainMyweekly';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzweekly',
            majorPSDEField: 'ibzweeklyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyEditViewMainMyweeklyBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}