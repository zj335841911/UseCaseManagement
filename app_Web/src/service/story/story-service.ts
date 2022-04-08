import { Http,Util } from '@/utils';
import StoryServiceBase from './story-service-base';


/**
 * 需求服务对象
 *
 * @export
 * @class StoryService
 * @extends {StoryServiceBase}
 */
export default class StoryService extends StoryServiceBase {

    /**
     * Creates an instance of  StoryService.
     * 
     * @param {*} [opts={}]
     * @memberof  StoryService
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * GetTaskReStory接口方法(重写）
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async GetTaskReStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && true){
            let res:any = await Http.getInstance().get(`/products/${context.product}/stories/getdraft`,isloading);
            res.data.story = data.story;
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs ? res.data.storyspecs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            return res;
        }
        if(context.story && true) {
            let res:any = await Http.getInstance().get(`/stories/${context.story}`,isloading);
            this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs ? res.data.storyspecs : []));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
            this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
            this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
            return res;
        }
        let res:any = await  Http.getInstance().get(`/stories/getdraft`,isloading);
        res.data.story = data.story;
        this.tempStorage.setItem(context.srfsessionkey+'_storyspecs',JSON.stringify(res.data.storyspecs ? res.data.storyspecs : []));
        this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks ? res.data.tasks : []));
        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases ? res.data.cases : []));
        this.tempStorage.setItem(context.srfsessionkey+'_bugs',JSON.stringify(res.data.bugs ? res.data.bugs : []));
        return res;
    }

    /**
     * ImportPlanStories接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ImportPlanStories(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {

        context.story = 0;
        data.id = 0;
        return Http.getInstance().post(`/stories/${context.story}/importplanstories`,data,isloading);
    }

        /**
     * ReleaseBatchUnlinkStory接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof StoryServiceBase
     */
    public async ReleaseBatchUnlinkStory(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        if(context.product && context.story){
            let masterData:any = {};
        let casesData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_cases'),'undefined')){
            casesData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_cases') as any);
            if(casesData && casesData.length && casesData.length > 0){
                casesData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.cases = casesData;
        let tasksData:any = [];
        if(!Object.is(this.tempStorage.getItem(context.srfsessionkey+'_tasks'),'undefined')){
            tasksData = JSON.parse(this.tempStorage.getItem(context.srfsessionkey+'_tasks') as any);
            if(tasksData && tasksData.length && tasksData.length > 0){
                tasksData.forEach((item:any) => {
                    if(item.srffrontuf){
                        if(Object.is(item.srffrontuf,"0")){
                            item.id = null;
                            if(item.hasOwnProperty('id') && item.id) item.id = null;
                        }
                        delete item.srffrontuf;
                    }
                });
            }
        }
        masterData.tasks = tasksData;
            Object.assign(data,masterData);
            context.story = 0;  //附加
            data.id = 0;      //附加
            let res:any = await Http.getInstance().post(`/products/${context.product}/stories/${context.story}/releasebatchunlinkstory`,data,isloading);
                        this.tempStorage.setItem(context.srfsessionkey+'_cases',JSON.stringify(res.data.cases?res.data.cases:[]));
            this.tempStorage.setItem(context.srfsessionkey+'_tasks',JSON.stringify(res.data.tasks?res.data.tasks:[]));

            return res;
        }
            let res:any = Http.getInstance().post(`/stories/${context.story}/releasebatchunlinkstory`,data,isloading);
            return res;
    }
}