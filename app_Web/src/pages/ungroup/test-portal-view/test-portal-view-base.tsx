import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { PortalViewBase } from '@/studio-core';

/**
 * 测试主页视图基类
 *
 * @export
 * @class TestPortalViewBase
 * @extends {PortalViewBase}
 */
export class TestPortalViewBase extends PortalViewBase {

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestPortalViewBase
     */
    protected model: any = {
        srfCaption: 'app.views.testportalview.caption',
        srfTitle: 'app.views.testportalview.title',
        srfSubTitle: 'app.views.testportalview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestPortalViewBase
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
     * @memberof TestPortalViewBase
     */
	protected viewtag: string = 'b127362083d624afe84ed1e8f674223e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TestPortalViewBase
     */ 
    protected viewName: string = 'TestPortalView';



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestPortalViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestPortalViewBase
     */
    public engineInit(): void {
    }



    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof TestPortalViewBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof TestPortalViewBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}