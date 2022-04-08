import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { PortalViewBase } from '@/studio-core';

/**
 * 项目主页视图基类
 *
 * @export
 * @class ProjectPortalViewBase
 * @extends {PortalViewBase}
 */
export class ProjectPortalViewBase extends PortalViewBase {

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectPortalViewBase
     */
    protected model: any = {
        srfCaption: 'app.views.projectportalview.caption',
        srfTitle: 'app.views.projectportalview.title',
        srfSubTitle: 'app.views.projectportalview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectPortalViewBase
     */
    protected containerModel: any = {
        view_dashboard: {
            name: 'dashboard',
            type: 'DASHBOARD',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectPortalViewBase
     */
	protected viewtag: string = '288e324a2c3784f988a64c71508e97ba';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectPortalViewBase
     */ 
    protected viewName: string = 'ProjectPortalView';



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectPortalViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectPortalViewBase
     */
    public engineInit(): void {
    }



    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof ProjectPortalViewBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof ProjectPortalViewBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}