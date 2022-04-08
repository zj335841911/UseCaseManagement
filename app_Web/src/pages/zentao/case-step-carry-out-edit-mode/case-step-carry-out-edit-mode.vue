<template src="./case-step-carry-out-edit-mode.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseStepCarryOutEditModeBase } from './case-step-carry-out-edit-mode-base';
import view_grid from '@widgets/ibzcase-step/main-row-edit-carry-out-grid/main-row-edit-carry-out-grid.vue';

/**
 * 用例步骤视图
 *
 * @export
 * @class CaseStepCarryOutEditMode
 * @extends {CaseStepCarryOutEditModeBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseStepCarryOutEditMode extends CaseStepCarryOutEditModeBase {}
</script>
