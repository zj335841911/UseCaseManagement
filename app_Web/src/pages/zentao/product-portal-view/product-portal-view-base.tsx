import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { PortalViewBase } from '@/studio-core';

/**
 * 产品主页视图基类
 *
 * @export
 * @class ProductPortalViewBase
 * @extends {PortalViewBase}
 */
export class ProductPortalViewBase extends PortalViewBase {

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductPortalViewBase
     */
    protected model: any = {
        srfCaption: 'app.views.productportalview.caption',
        srfTitle: 'app.views.productportalview.title',
        srfSubTitle: 'app.views.productportalview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductPortalViewBase
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
     * @memberof ProductPortalViewBase
     */
	protected viewtag: string = '305a8f8ecf4dfa714d2e3cbc2e0eecf5';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductPortalViewBase
     */ 
    protected viewName: string = 'ProductPortalView';



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductPortalViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductPortalViewBase
     */
    public engineInit(): void {
    }



    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof ProductPortalViewBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof ProductPortalViewBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}