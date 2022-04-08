<template src="./case-cur-suit-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseCurSuitGridViewBase } from './case-cur-suit-grid-view-base';
import view_grid from '@widgets/case/main-grid-suit-sub-grid/main-grid-suit-sub-grid.vue';
import view_searchbar from '@widgets/case/other-custom-searchbar/other-custom-searchbar.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseCurSuitGridView
 * @extends {CaseCurSuitGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class CaseCurSuitGridView extends CaseCurSuitGridViewBase {}
</script>
