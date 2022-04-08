<script lang='tsx'>
import { Component } from "vue-property-decorator";
import { VueLifeCycleProcessing } from '@/studio-core/decorators/VueLifeCycleProcessing';
import { IBizPMSBase } from './i-biz-pms-base';
import view_appmenu from '@widgets/app/zentao-appmenu/zentao-appmenu.vue';

/**
 * 应用首页
 */
@Component({
    components: {
        view_appmenu, 
    }
})
@VueLifeCycleProcessing()
export default class IBizPMS extends IBizPMSBase {

    /**
     * 当前激活菜单项
     * 
     * @type {*}
     * @memberof IBizPMS
     */
    public activeItem: any;

   /**
   * 绘制内容 (重写)
   */
  public render(h: any): any {
    const styleMode = this.$uiState.layoutState.styleMode;
    const isStyle2 = styleMode === 'STYLE2';
    let leftContent: any;
    switch (styleMode) {
      case 'DEFAULT':
        leftContent = <app-content-left-exp ref="leftExp" ctrlName="zentao" menus={this.left_exp.items} on-active-item-change={(activeItem: any) => { this.activeItem = activeItem; this.$forceUpdate(); }} />;
        break;
      case 'STYLE2':
        leftContent = <app-content-left-nav-menu ref="leftNavMenu" ctrlName="zentao" menus={this.left_exp.items} on-menu-click={(item: any) => this.click(item)}/>;
    }
    return (
      <app-layout ref="appLayout">
        <template slot="header">
          <app-header>
            <template slot="header_left">
              <div class="title">
                { this.isEnableAppSwitch ? <span class="menuicon" on-click={() => this.contextMenuDragVisiable = !this.contextMenuDragVisiable}><icon type="md-menu" />&nbsp;</span> : null}
                iBiz软件生产管理
              </div>
            </template>
            <template slot="header_right">
              <app-header-menus ref="headerMenus" ctrlName="zentao" menus={this.top_menus.items} on-menu-click={(item: any) => this.click(item)}/>
              {this.$topRenderService.rightItemsRenders.map((fun: any) => fun(h))}
              <full-text-search path="/ibizpms/ibizproindices/listview"/>
              <user-info ref="userInfo" ctrlName="zentao" menus={this.user_menus.items} on-menu-click={(item: any) => this.click(item)}/>
            </template>
          </app-header>
          <view_appmenu ref='appmenu'/>
          {this.isEnableAppSwitch ? <context-menu-drag contextMenuDragVisiable={this.contextMenuDragVisiable}></context-menu-drag> : null}
        </template>
        <app-content>
          {this.left_exp.items ? <template slot="content_left">
            {leftContent}
          </template> : null}
          {styleMode === 'DEFAULT' ? <tab-page-exp ref="tabExp" activeItem={this.activeItem}></tab-page-exp> : null}
          <div class="view-warp" on-click={() => this.contextMenuDragVisiable = false}>
            <app-keep-alive routerList={this.appService.navHistory.historyList}>
              <router-view key={this.$route.fullPath}></router-view>
            </app-keep-alive>
          </div>
          {this.bottom_exp.items ? <template slot="content_bottom">
            <app-content-bottom-exp ref="bootomExp" ctrlName="zentao" menus={this.bottom_exp.items} />
          </template> : null}
        </app-content>
        <template slot="footer">
          <app-footer ref="footer"/>
        </template>
      </app-layout>
    );
  }
}
</script>
