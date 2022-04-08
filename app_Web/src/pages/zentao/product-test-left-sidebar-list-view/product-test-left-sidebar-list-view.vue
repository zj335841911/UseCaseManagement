<template src="./product-test-left-sidebar-list-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTestLeftSidebarListViewBase } from './product-test-left-sidebar-list-view-base';
import view_list from '@widgets/product/test-sidebar-list/test-sidebar-list.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProductTestLeftSidebarListView
 * @extends {ProductTestLeftSidebarListViewBase}
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
export default class ProductTestLeftSidebarListView extends ProductTestLeftSidebarListViewBase {


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProductTestLeftSidebarListView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        if (fullargs && fullargs.length > 0 && fullargs[0].srftabactivate) {
            data.srftabactivate = fullargs[0].srftabactivate;
        }
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'testtabexpview', parameterName: 'testtabexpview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }

}
</script>