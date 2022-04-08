import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import DeptService from '@/service/dept/dept-service';
import DeptAuthService from '@/authservice/dept/dept-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import DeptUIService from '@/uiservice/dept/dept-ui-service';

/**
 * 部门编辑视图视图基类
 *
 * @export
 * @class DeptInfoEditViewBase
 * @extends {EditViewBase}
 */
export class DeptInfoEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DeptInfoEditViewBase
     */
    protected appDeName: string = 'dept';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof DeptInfoEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof DeptInfoEditViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof DeptInfoEditViewBase
     */ 
    protected dataControl:string = "form";

    /**
     * 实体服务对象
     *
     * @type {DeptService}
     * @memberof DeptInfoEditViewBase
     */
    protected appEntityService: DeptService = new DeptService;

    /**
     * 实体权限服务对象
     *
     * @type DeptUIService
     * @memberof DeptInfoEditViewBase
     */
    public appUIService: DeptUIService = new DeptUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof DeptInfoEditViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof DeptInfoEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.dept.views.infoeditview.caption',
        srfTitle: 'entities.dept.views.infoeditview.title',
        srfSubTitle: 'entities.dept.views.infoeditview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof DeptInfoEditViewBase
     */
    protected containerModel: any = {
        view_toolbar: { name: 'toolbar', type: 'TOOLBAR' },
        view_form: { name: 'form', type: 'FORM' },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof DeptInfoEditView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof DeptInfoEditViewBase
     */
	protected viewtag: string = 'a52f8b23a989b8526e4c98c49d73a3d0';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof DeptInfoEditViewBase
     */ 
    protected viewName:string = "DeptInfoEditView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof DeptInfoEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof DeptInfoEditViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof DeptInfoEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'dept',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptInfoEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptInfoEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DeptInfoEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}