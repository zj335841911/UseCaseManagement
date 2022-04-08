<template src="./test-module-grid-view-main.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestModuleGridViewMainBase } from './test-module-grid-view-main-base';
import view_grid from '@widgets/test-module/main-row-grid/main-row-grid.vue';

/**
 * 产品模块表格视图视图
 *
 * @export
 * @class TestModuleGridViewMain
 * @extends {TestModuleGridViewMainBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TestModuleGridViewMain extends TestModuleGridViewMainBase {}
</script>
