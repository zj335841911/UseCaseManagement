<template src="./ibz-agent-main-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzAgentMainGridViewBase } from './ibz-agent-main-grid-view-base';
import view_grid from '@widgets/ibz-agent/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibz-agent/default-searchform/default-searchform.vue';

/**
 * 代理表格视图视图
 *
 * @export
 * @class IbzAgentMainGridView
 * @extends {IbzAgentMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzAgentMainGridView extends IbzAgentMainGridViewBase {}
</script>
