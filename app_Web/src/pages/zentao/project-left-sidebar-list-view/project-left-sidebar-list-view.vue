<template src="./project-left-sidebar-list-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectLeftSidebarListViewBase } from './project-left-sidebar-list-view-base';
import view_list from '@widgets/project/sidebar-list/sidebar-list.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectLeftSidebarListView
 * @extends {ProjectLeftSidebarListViewBase}
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
export default class ProjectLeftSidebarListView extends ProjectLeftSidebarListViewBase {

    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof ProjectLeftSidebarListView
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
            { pathName: 'projects', parameterName: 'project' },
            { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
        ];
        const _this: any = this;
        const openIndexViewTab = (data: any) => {
            const routePath = this.$viewTool.buildUpRoutePath(this.$route, tempContext, deResParameters, parameters, args, data);
            this.$router.push(routePath);
        }
        openIndexViewTab(data);
    }

    /**
     * 生命周期
     *
     * @memberof ProjectLeftSidebarListView
     */ 
    public mounted() {
        super.mounted();
        this.$acc.commandLocal(() => {
            this.engine.load();
        }, 'remove', this.appDeName);
    }

}
</script>