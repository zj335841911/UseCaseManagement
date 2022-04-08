import { Http } from '@/utils';
import { Util } from '@/utils';
import EntityService from '../entity-service';



/**
 * 产品周报服务对象基类
 *
 * @export
 * @class IBIZPRO_PRODUCTWEEKLYServiceBase
 * @extends {EntityServie}
 */
export default class IBIZPRO_PRODUCTWEEKLYServiceBase extends EntityService {

    /**
     * Creates an instance of  IBIZPRO_PRODUCTWEEKLYServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  IBIZPRO_PRODUCTWEEKLYServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 初始化基础数据
     *
     * @memberof IBIZPRO_PRODUCTWEEKLYServiceBase
     */
    public initBasicData(){
        this.APPLYDEKEY ='ibizpro_productweekly';
        this.APPDEKEY = 'ibizpro_productweeklyid';
        this.APPDENAME = 'ibizpro_productweeklies';
        this.APPDETEXT = 'ibizproproductweeklyname';
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
     * @memberof IBIZPRO_PRODUCTWEEKLYServiceBase
     */
    public async Select(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
            let res:any = Http.getInstance().get(`/ibizpro_productweeklies/${context.ibizpro_productweekly}/select`,isloading);
            
            return res;
    }

    /**
     * SUMPRODUCTWEEKLY接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBIZPRO_PRODUCTWEEKLYServiceBase
     */
    public async SUMPRODUCTWEEKLY(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
    }

    /**
     * FetchDefault接口方法
     *
     * @param {*} [context={}]
     * @param {*} [data={}]
     * @param {boolean} [isloading]
     * @returns {Promise<any>}
     * @memberof IBIZPRO_PRODUCTWEEKLYServiceBase
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
     * @memberof IBIZPRO_PRODUCTWEEKLYServiceBase
     */
    public async searchDefault(context: any = {},data: any = {}, isloading?: boolean): Promise<any> {
        let tempData:any = JSON.parse(JSON.stringify(data));
        return await Http.getInstance().post(`/ibizpro_productweeklies/searchdefault`,tempData,isloading);
    }
}