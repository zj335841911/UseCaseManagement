<template src="./product-left-sidebar-list-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductLeftSidebarListViewBase } from './product-left-sidebar-list-view-base';
import view_list from '@widgets/product/sidebar-list/sidebar-list.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProductLeftSidebarListView
 * @extends {ProductLeftSidebarListViewBase}
 */
@Component({
    components: {
        view_list
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$store.commit('addCurPageViewtag', { route: to, viewtag: vm.viewtag });
        });
    },
})
@VueLifeCycleProcessing()
export default class ProductLeftSidebarListView extends ProductLeftSidebarListViewBase {

    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductLeftSidebarListView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        const deResParameters: any[] = [];
        let parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
        ];
        if (fullargs && fullargs.length > 0) {
            if (fullargs[0].srftabactivate) {
                data.srftabactivate = fullargs[0].srftabactivate;
            }
            if (fullargs[0].parameters) {
                parameters = fullargs[0].parameters;
            }
        }
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }

    /**
     * 生命周期
     *
     * @memberof ProductLeftSidebarListView
     */ 
    public mounted() {
        super.mounted();
        this.$acc.commandLocal(() => {
            this.engine.load();
        }, 'remove', this.appDeName);
    }
}
</script>