<template src="./case-batch-new-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseBatchNewGridViewBase } from './case-batch-new-grid-view-base';
import view_grid from '@widgets/case/batch-new-grid/batch-new-grid.vue';

/**
 * 测试用例视图
 *
 * @export
 * @class CaseBatchNewGridView
 * @extends {CaseBatchNewGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseBatchNewGridView extends CaseBatchNewGridViewBase {}
</script>
