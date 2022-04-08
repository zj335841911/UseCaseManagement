<template src="./test-task-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskGridViewBase } from './test-task-grid-view-base';
import view_grid from '@widgets/test-task/main-grid/main-grid.vue';
import view_searchbar from '@widgets/test-task/custom-searchbar/custom-searchbar.vue';

/**
 * 测试单表格视图视图
 *
 * @export
 * @class TestTaskGridView
 * @extends {TestTaskGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskGridView extends TestTaskGridViewBase {}
</script>
