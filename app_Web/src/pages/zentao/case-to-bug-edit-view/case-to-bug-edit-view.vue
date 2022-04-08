<template src="./case-to-bug-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseToBugEditViewBase } from './case-to-bug-edit-view-base';
import view_form from '@widgets/case/to-bug-form/to-bug-form.vue';

/**
 * 转BUG视图
 *
 * @export
 * @class CaseToBugEditView
 * @extends {CaseToBugEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseToBugEditView extends CaseToBugEditViewBase {}
</script>
