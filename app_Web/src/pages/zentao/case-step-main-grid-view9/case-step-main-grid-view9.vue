<template src="./case-step-main-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseStepMainGridView9Base } from './case-step-main-grid-view9-base';
import view_grid from '@widgets/case-step/main-grid/main-grid.vue';

/**
 * 用例步骤视图
 *
 * @export
 * @class CaseStepMainGridView9
 * @extends {CaseStepMainGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseStepMainGridView9 extends CaseStepMainGridView9Base {}
</script>
