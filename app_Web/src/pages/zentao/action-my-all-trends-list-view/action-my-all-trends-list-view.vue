<template src="./action-my-all-trends-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionMyAllTrendsListViewBase } from './action-my-all-trends-list-view-base';
import view_list from '@widgets/action/trends-list/trends-list.vue';

/**
 * 系统日志列表视图视图
 *
 * @export
 * @class ActionMyAllTrendsListView
 * @extends {ActionMyAllTrendsListViewBase}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ActionMyAllTrendsListView extends ActionMyAllTrendsListViewBase {}
</script>
