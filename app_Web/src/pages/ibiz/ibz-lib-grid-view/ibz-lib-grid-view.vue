<template src="./ibz-lib-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibGridViewBase } from './ibz-lib-grid-view-base';
import view_grid from '@widgets/ibz-lib/main-grid/main-grid.vue';
import view_searchbar from '@widgets/ibz-lib/custom-searchbar/custom-searchbar.vue';

/**
 * 用例库视图
 *
 * @export
 * @class IbzLibGridView
 * @extends {IbzLibGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibGridView extends IbzLibGridViewBase {}
</script>
