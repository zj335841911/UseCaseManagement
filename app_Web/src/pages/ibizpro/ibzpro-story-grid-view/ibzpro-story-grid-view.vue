<template src="./ibzpro-story-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBZProStoryGridViewBase } from './ibzpro-story-grid-view-base';
import view_grid from '@widgets/ibzpro-story/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibzpro-story/default-searchform/default-searchform.vue';

/**
 * 需求表格视图视图
 *
 * @export
 * @class IBZProStoryGridView
 * @extends {IBZProStoryGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IBZProStoryGridView extends IBZProStoryGridViewBase { }
</script>
