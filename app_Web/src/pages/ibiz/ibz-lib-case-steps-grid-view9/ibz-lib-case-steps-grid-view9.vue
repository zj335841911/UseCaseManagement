<template src="./ibz-lib-case-steps-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibCaseStepsGridView9Base } from './ibz-lib-case-steps-grid-view9-base';
import view_grid from '@widgets/ibz-lib-case-step-tmp/main-grid/main-grid.vue';

/**
 * 用例库用例步骤表格视图视图
 *
 * @export
 * @class IbzLibCaseStepsGridView9
 * @extends {IbzLibCaseStepsGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibCaseStepsGridView9 extends IbzLibCaseStepsGridView9Base {}
</script>
