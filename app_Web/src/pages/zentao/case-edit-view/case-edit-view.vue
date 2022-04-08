<template src="./case-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseEditViewBase } from './case-edit-view-base';
import view_form from '@widgets/case/main-form/main-form.vue';

/**
 * 功能测试编辑视图视图
 *
 * @export
 * @class CaseEditView
 * @extends {CaseEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseEditView extends CaseEditViewBase {}
</script>
