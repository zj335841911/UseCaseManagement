import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import IbzProjectMemberService from '@/service/ibz-project-member/ibz-project-member-service';
import RelatedMembersService from './related-members-portlet-service';
import IbzProjectMemberUIService from '@/uiservice/ibz-project-member/ibz-project-member-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet6部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {RelatedMembersPortletBase}
 */
export class RelatedMembersPortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof RelatedMembersPortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {RelatedMembersService}
     * @memberof RelatedMembersPortletBase
     */
    public service: RelatedMembersService = new RelatedMembersService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzProjectMemberService}
     * @memberof RelatedMembersPortletBase
     */
    public appEntityService: IbzProjectMemberService = new IbzProjectMemberService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof RelatedMembersPortletBase
     */
    protected appDeName: string = 'ibzprojectmember';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof RelatedMembersPortletBase
     */
    protected appDeLogicName: string = '项目相关成员';

    /**
     * 界面UI服务对象
     *
     * @type {IbzProjectMemberUIService}
     * @memberof RelatedMembersBase
     */  
    public appUIService: IbzProjectMemberUIService = new IbzProjectMemberUIService(this.$store);


    /**
     * 长度
     *
     * @type {number}
     * @memberof RelatedMembers
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof RelatedMembers
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof RelatedMembersBase
     */
    public portletType: string = 'view';

    /**
     * 界面行为模型数据
     *
     * @memberof RelatedMembersBase
     */
    public uiactionModel: any = {
    }



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof RelatedMembersBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof RelatedMembersBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof RelatedMembersBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof RelatedMembersBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return '300px';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof RelatedMembersBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof RelatedMembersBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if(Object.is(tag, "all-portlet") && Object.is(action,'loadmodel')){
                   this.calcUIActionAuthState(data);
                }
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof RelatedMembersBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof RelatedMembersBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof RelatedMembersBase
     */
    public calcUIActionAuthState(data:any = {}) {
        //  如果是操作栏，不计算权限
        if(this.portletType && Object.is('actionbar', this.portletType)) {
            return;
        }
        let _this: any = this;
        let uiservice: any = _this.appUIService ? _this.appUIService : new UIService(_this.$store);
        if(_this.uiactionModel){
            ViewTool.calcActionItemAuthState(data,_this.uiactionModel,uiservice);
        }
    }


    /**
     * 刷新
     *
     * @memberof RelatedMembersBase
     */
    public refresh(args?: any) {
      this.viewState.next({ tag: 'IbzProjectMemberEditView9', action: 'refresh', data: args });
    }

}
