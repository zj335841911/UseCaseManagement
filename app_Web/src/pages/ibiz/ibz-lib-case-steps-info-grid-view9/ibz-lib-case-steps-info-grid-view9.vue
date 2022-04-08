<template src="./ibz-lib-case-steps-info-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibCaseStepsInfoGridView9Base } from './ibz-lib-case-steps-info-grid-view9-base';
import view_grid from '@widgets/ibz-lib-casesteps/main-info-grid/main-info-grid.vue';

/**
 * 用例库用例步骤表格视图（主数据）视图
 *
 * @export
 * @class IbzLibCaseStepsInfoGridView9
 * @extends {IbzLibCaseStepsInfoGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibCaseStepsInfoGridView9 extends IbzLibCaseStepsInfoGridView9Base {}
</script>
