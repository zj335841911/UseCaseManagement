<template src="./ibizpro-keyword-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZProKeywordGridViewBase } from './ibizpro-keyword-grid-view-base';
import view_grid from '@widgets/ibizpro-keyword/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibizpro-keyword/default-searchform/default-searchform.vue';

/**
 * 关键字表格视图视图
 *
 * @export
 * @class IBIZProKeywordGridView
 * @extends {IBIZProKeywordGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZProKeywordGridView extends IBIZProKeywordGridViewBase {}
</script>
