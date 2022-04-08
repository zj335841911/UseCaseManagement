<template src="./ibzpro-story-module-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZProStoryModuleGridViewBase } from './ibzpro-story-module-grid-view-base';
import view_grid from '@widgets/ibzpro-story-module/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibzpro-story-module/default-searchform/default-searchform.vue';

/**
 * 需求模块表格视图视图
 *
 * @export
 * @class IBZProStoryModuleGridView
 * @extends {IBZProStoryModuleGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IBZProStoryModuleGridView extends IBZProStoryModuleGridViewBase { }
</script>
