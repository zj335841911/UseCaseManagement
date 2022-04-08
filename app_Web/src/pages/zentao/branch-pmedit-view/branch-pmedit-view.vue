<template src="./branch-pmedit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BranchPMEditViewBase } from './branch-pmedit-view-base';
import view_form from '@widgets/branch/platform-management-form/platform-management-form.vue';

/**
 * 平台管理视图
 *
 * @export
 * @class BranchPMEditView
 * @extends {BranchPMEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BranchPMEditView extends BranchPMEditViewBase {}
</script>
