<template src="./bug-steps-info-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStepsInfoEditViewBase } from './bug-steps-info-edit-view-base';
import view_form from '@widgets/bug/steps-info-form/steps-info-form.vue';

/**
 * Bug编辑视图视图
 *
 * @export
 * @class BugStepsInfoEditView
 * @extends {BugStepsInfoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugStepsInfoEditView extends BugStepsInfoEditViewBase {}
</script>
