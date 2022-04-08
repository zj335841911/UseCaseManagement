<template src="./case-to-bug-test-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseToBugTestEditViewBase } from './case-to-bug-test-edit-view-base';
import view_form from '@widgets/case/to-bug-test-task-form/to-bug-test-task-form.vue';

/**
 * 转BUG视图
 *
 * @export
 * @class CaseToBugTestEditView
 * @extends {CaseToBugTestEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseToBugTestEditView extends CaseToBugTestEditViewBase {}
</script>
