<template src="./test-task-grid-view9-un-tested.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskGridView9_UnTestedBase } from './test-task-grid-view9-un-tested-base';
import view_grid from '@widgets/test-task/main2-grid/main2-grid.vue';

/**
 * 测试版本表格视图视图
 *
 * @export
 * @class TestTaskGridView9_UnTested
 * @extends {TestTaskGridView9_UnTestedBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskGridView9_UnTested extends TestTaskGridView9_UnTestedBase {}
</script>
