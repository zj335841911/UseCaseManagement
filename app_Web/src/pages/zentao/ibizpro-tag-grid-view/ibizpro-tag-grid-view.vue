<template src="./ibizpro-tag-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZProTagGridViewBase } from './ibizpro-tag-grid-view-base';
import view_grid from '@widgets/ibizpro-tag/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibizpro-tag/default-searchform/default-searchform.vue';

/**
 * 标签表格视图视图
 *
 * @export
 * @class IBIZProTagGridView
 * @extends {IBIZProTagGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZProTagGridView extends IBIZProTagGridViewBase {}
</script>
