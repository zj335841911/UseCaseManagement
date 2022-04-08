import { Http } from '@/utils';
import { Util, Errorlog } from '@/utils';
import ControlService from '@/widgets/control-service';
import StoryService from '@/service/story/story-service';
import MyOpenedStoryModel from './my-opened-story-chart-model';


/**
 * MyOpenedStory 部件服务对象
 *
 * @export
 * @class MyOpenedStoryService
 */
export default class MyOpenedStoryService extends ControlService {

    /**
     * 需求服务对象
     *
     * @type {StoryService}
     * @memberof MyOpenedStoryService
     */
    public appEntityService: StoryService = new StoryService({ $store: this.getStore() });

    /**
     * 设置从数据模式
     *
     * @type {boolean}
     * @memberof MyOpenedStoryService
     */
    public setTempMode(){
        this.isTempMode = false;
    }

    /**
     * Creates an instance of MyOpenedStoryService.
     * 
     * @param {*} [opts={}]
     * @memberof MyOpenedStoryService
     */
    constructor(opts: any = {}) {
        super(opts);
        this.model = new MyOpenedStoryModel();
    }

    /**
     * 查询数据
     *
     * @param {string} action
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof MyOpenedStoryService
     */
    @Errorlog
    public search(action: string,context: any = {}, data: any = {}, isloading?: boolean): Promise<any> {
        const {data:Data,context:Context} = this.handleRequestData(action,context,data,true);
        return new Promise((resolve: any, reject: any) => {
            const _appEntityService: any = this.appEntityService;
            let result: Promise<any>;
            if (_appEntityService[action] && _appEntityService[action] instanceof Function) {
                result = _appEntityService[action](Context,Data, isloading);
            }else{
                result =_appEntityService.FetchDefault(Context,Data, isloading);
            }
            result.then((response) => {
                resolve(response);
            }).catch(response => {
                reject(response);
            });      
        });
    }
}