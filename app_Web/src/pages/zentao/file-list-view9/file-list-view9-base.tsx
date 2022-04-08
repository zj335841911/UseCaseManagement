
import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { ListView9Base } from '@/studio-core';
import FileService from '@/service/file/file-service';
import FileAuthService from '@/authservice/file/file-auth-service';
import ListView9Engine from '@engine/view/list-view9-engine';
import FileUIService from '@/uiservice/file/file-ui-service';
import CodeListService from '@service/app/codelist-service';


/**
 * 附件视图基类
 *
 * @export
 * @class FileListView9Base
 * @extends {ListView9Base}
 */
export class FileListView9Base extends ListView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof FileListView9Base
     */
    protected appDeName: string = 'file';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof FileListView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof FileListView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof FileListView9Base
     */ 
    protected dataControl: string = 'list';

    /**
     * 实体服务对象
     *
     * @type {FileService}
     * @memberof FileListView9Base
     */
    protected appEntityService: FileService = new FileService;

    /**
     * 实体权限服务对象
     *
     * @type FileUIService
     * @memberof FileListView9Base
     */
    public appUIService: FileUIService = new FileUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof FileListView9Base
	 */
    protected customViewParams: any = {
        'objecttype': {
            isRawValue: false,
            value: 'OBJECTTYPE',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof FileListView9Base
     */
    protected model: any = {
        srfCaption: 'entities.file.views.listview9.caption',
        srfTitle: 'entities.file.views.listview9.title',
        srfSubTitle: 'entities.file.views.listview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof FileListView9Base
     */
    protected containerModel: any = {
        view_list: {
            name: 'list',
            type: 'LIST',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof FileListView9Base
     */
	protected viewtag: string = 'd940bfd96f6087050755b99a3b6bab0a';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof FileListView9Base
     */ 
    protected viewName: string = 'FileListView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof FileListView9Base
     */
    public engine: ListView9Engine = new ListView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof FileListView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof FileListView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            list: this.$refs.list,
            opendata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.opendata(args, fullargs, params, $event, xData);
            },
            newdata: (args: any[], fullargs?: any[], params?: any, $event?: any, xData?: any) => {
                this.newdata(args, fullargs, params, $event, xData);
            },
            keyPSDEField: 'file',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * list 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof FileListView9Base
     */
    public list_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'selectionchange', $event);
    }

    /**
     * list 部件 beforeload 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof FileListView9Base
     */
    public list_beforeload($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'beforeload', $event);
    }

    /**
     * list 部件 rowdblclick 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof FileListView9Base
     */
    public list_rowdblclick($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'rowdblclick', $event);
    }

    /**
     * list 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof FileListView9Base
     */
    public list_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'remove', $event);
    }

    /**
     * list 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof FileListView9Base
     */
    public list_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('list', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof FileListView9
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof FileListView9
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


}