import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { MPickupViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryAuthService from '@/authservice/story/story-auth-service';
import MPickupViewEngine from '@engine/view/mpickup-view-engine';
import StoryUIService from '@/uiservice/story/story-ui-service';

/**
 * 关联需求视图基类
 *
 * @export
 * @class StoryMPickupView2Base
 * @extends {MPickupViewBase}
 */
export class StoryMPickupView2Base extends MPickupViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryMPickupView2Base
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof StoryMPickupView2Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof StoryMPickupView2Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryMPickupView2Base
     */
    protected appEntityService: StoryService = new StoryService;

    /**
     * 实体权限服务对象
     *
     * @type StoryUIService
     * @memberof StoryMPickupView2Base
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof StoryMPickupView2Base
	 */
    protected customViewParams: any = {
        'project': {
            isRawValue: false,
            value: 'project',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof StoryMPickupView2Base
     */
    protected model: any = {
        srfCaption: 'entities.story.views.mpickupview2.caption',
        srfTitle: 'entities.story.views.mpickupview2.title',
        srfSubTitle: 'entities.story.views.mpickupview2.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryMPickupView2Base
     */
    protected containerModel: any = {
        view_pickupviewpanel: {
            name: 'pickupviewpanel',
            type: 'PICKUPVIEWPANEL',
        },
        view_okbtn: {
            name: 'okbtn',
            type: 'button',
            text: '确定',
            disabled: true,
        },
        view_cancelbtn: {
            name: 'cancelbtn',
            type: 'button',
            text: '取消',
            disabled: false,
        },
        view_leftbtn: {
            name: 'leftbtn',
            type: 'button',
            text: '左移',
            disabled: true,
        },
        view_rightbtn: {
            name: 'rightbtn',
            type: 'button',
            text: '右移',
            disabled: true,},
        view_allleftbtn: {
            name: 'allleftbtn',
            type: 'button',
            text: '全部左移',
            disabled: true,
        },
        view_allrightbtn: {
            name: 'allrightbtn',
            type: 'button',
            text: '全部右移',
            disabled: true,
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof StoryMPickupView2Base
     */
	protected viewtag: string = '59c086d1e5ae60bb636bcc1e41d83bc8';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof StoryMPickupView2Base
     */ 
    protected viewName: string = 'StoryMPickupView2';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryMPickupView2Base
     */
    public engine: MPickupViewEngine = new MPickupViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof StoryMPickupView2Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryMPickupView2Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            pickupviewpanel: this.$refs.pickupviewpanel,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * pickupviewpanel 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMPickupView2Base
     */
    public pickupviewpanel_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'selectionchange', $event);
    }

    /**
     * pickupviewpanel 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMPickupView2Base
     */
    public pickupviewpanel_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'activated', $event);
    }

    /**
     * pickupviewpanel 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof StoryMPickupView2Base
     */
    public pickupviewpanel_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('pickupviewpanel', 'load', $event);
    }



    /**
     * 添加左侧面板所有数据到右侧
     *
     * @memberof StoryMPickupView2
     */
    public onCLickAllRight(): void {
        Object.values(this.containerModel).forEach((model: any) => {
            if (!Object.is(model.type, 'PICKUPVIEWPANEL')) {
                return;
            }
            if (model.datas.length > 0) {
                model.datas.forEach((data: any, index: any) => {
                    Object.assign(data, { srfmajortext: data['title'] });
                })
            }
            model.datas.forEach((item: any) => {
                const index: number = this.viewSelections.findIndex((selection: any) => Object.is(item.srfkey, selection.srfkey));
                if (index === -1) {
                    item._select = false;
                    this.viewSelections.push(item);
                }
            });
        });
        this.selectedData = JSON.stringify(this.viewSelections);
    }


}