<template src="./case-step-main-grid-view9-edit-mode.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseStepMainGridView9_EditModeBase } from './case-step-main-grid-view9-edit-mode-base';
import view_grid from '@widgets/ibzcase-step/main-row-edit-grid/main-row-edit-grid.vue';

/**
 * 用例步骤视图
 *
 * @export
 * @class CaseStepMainGridView9_EditMode
 * @extends {CaseStepMainGridView9_EditModeBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseStepMainGridView9_EditMode extends CaseStepMainGridView9_EditModeBase {}
</script>
