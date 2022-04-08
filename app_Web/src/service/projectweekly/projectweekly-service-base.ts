import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 项目周报服务对象基类
 *
 * @export
 * @class PROJECTWEEKLYServiceBase
 * @extends {EntityServie}
 */
export default class PROJECTWEEKLYServiceBase extends EntityService {

    /**
     * Creates an instance of  PROJECTWEEKLYServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  PROJECTWEEKLYServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof PROJECTWEEKLYServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='projectweekly';
        this.APPDEKEY = 'projectweeklyid';
        this.APPDENAME = 'projectweeklies';
        this.APPDETEXT = 'projectweeklyname';
        this.APPNAME = 'web';
        this.SYSTEMNAME = 'pms';
    }

// 实体接口

    /**
     * Select接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof PROJECTWEEKLYServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/projectweeklies/${context.projectweekly}/select`,isloading);
            
            return res;
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof PROJECTWEEKLYServiceBase
     */
    public async FetchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * searchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof PROJECTWEEKLYServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/projectweeklies/searchdefault`,tempData,isloading);
    }
}