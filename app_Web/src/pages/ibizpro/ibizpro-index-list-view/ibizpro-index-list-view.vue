<template src="./ibizpro-index-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproIndexListViewBase } from './ibizpro-index-list-view-base';
import view_list from '@widgets/ibizpro-index/index-mob-list/index-mob-list.vue';
import view_searchform from '@widgets/ibizpro-index/default-searchform/default-searchform.vue';

/**
 * 索引检索列表视图视图
 *
 * @export
 * @class IbizproIndexListView
 * @extends {IbizproIndexListViewBase}
 */
@Component({
    components: {
        view_list, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproIndexListView extends IbizproIndexListViewBase {
    
    /**
     * 视图挂载完毕
     *
     * @protected
     * @memberof MDViewBase
     */
    protected viewMounted(): void {
        this.loadQuickGroupModel();
        if (this.$route.query.query) {
            this.query = this.$route.query.query as string;
        }
    }

    /**
     * 快速搜索
     *
     * @protected
     * @memberof ListViewBase
     */
    protected onSearch(): void {
        const list: any = this.$refs.list;
        if (list) {
            list.curPage = 1;
            let url: string =window.location.href;
            const index = url.indexOf('?');
            let newurl =  url.substring(0,index+1)+'query='+this.query;
            history.pushState("", "", newurl);          
            list.load(this.context, true);
        }
    }
}
</script>
