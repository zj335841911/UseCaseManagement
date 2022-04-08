<template src="./action-product-trends-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionProductTrendsListViewBase } from './action-product-trends-list-view-base';
import view_list from '@widgets/action/group-trends-list/group-trends-list.vue';

/**
 * 系统日志列表视图视图
 *
 * @export
 * @class ActionProductTrendsListView
 * @extends {ActionProductTrendsListViewBase}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ActionProductTrendsListView extends ActionProductTrendsListViewBase {}
</script>
