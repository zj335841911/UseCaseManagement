<template src="./test-module-grid-view-branch.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestModuleGridViewBranchBase } from './test-module-grid-view-branch-base';
import view_grid from '@widgets/test-module/main-branch-grid/main-branch-grid.vue';

/**
 * 产品模块表格视图视图
 *
 * @export
 * @class TestModuleGridViewBranch
 * @extends {TestModuleGridViewBranchBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestModuleGridViewBranch extends TestModuleGridViewBranchBase {}
</script>
