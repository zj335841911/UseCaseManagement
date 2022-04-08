<template src="./ibizpro-plugin-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZProPluginGridViewBase } from './ibizpro-plugin-grid-view-base';
import view_grid from '@widgets/ibizpro-plugin/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibizpro-plugin/default-searchform/default-searchform.vue';

/**
 * 系统插件表格视图视图
 *
 * @export
 * @class IBIZProPluginGridView
 * @extends {IBIZProPluginGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZProPluginGridView extends IBIZProPluginGridViewBase {}
</script>
