<template src="./branch-pminfo-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BranchPMInfoEditViewBase } from './branch-pminfo-edit-view-base';
import view_form from '@widgets/branch/platform-management-form/platform-management-form.vue';

/**
 * 平台管理视图
 *
 * @export
 * @class BranchPMInfoEditView
 * @extends {BranchPMInfoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BranchPMInfoEditView extends BranchPMInfoEditViewBase {}
</script>
