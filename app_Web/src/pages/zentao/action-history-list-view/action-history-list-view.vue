<template src="./action-history-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionHistoryListViewBase } from './action-history-list-view-base';
import view_history from '@widgets/history/default-list/default-list.vue';
import view_list from '@widgets/action/classify-by-type-list/classify-by-type-list.vue';

/**
 * 历史记录视图
 *
 * @export
 * @class ActionHistoryListView
 * @extends {ActionHistoryListViewBase}
 */
@Component({
    components: {
        view_history, 
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ActionHistoryListView extends ActionHistoryListViewBase {}
</script>
