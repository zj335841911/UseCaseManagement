<template src="./case-step-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseStepGridView9Base } from './case-step-grid-view9-base';
import view_grid from '@widgets/case-step/main-r-grid/main-r-grid.vue';

/**
 * 用例步骤表格视图视图
 *
 * @export
 * @class CaseStepGridView9
 * @extends {CaseStepGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseStepGridView9 extends CaseStepGridView9Base {}
</script>
