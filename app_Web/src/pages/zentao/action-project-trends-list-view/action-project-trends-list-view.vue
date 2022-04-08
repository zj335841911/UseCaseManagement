<template src="./action-project-trends-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionProjectTrendsListViewBase } from './action-project-trends-list-view-base';
import view_list from '@widgets/action/group-trends-list/group-trends-list.vue';

/**
 * 系统日志列表视图视图
 *
 * @export
 * @class ActionProjectTrendsListView
 * @extends {ActionProjectTrendsListViewBase}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ActionProjectTrendsListView extends ActionProjectTrendsListViewBase {}
</script>
