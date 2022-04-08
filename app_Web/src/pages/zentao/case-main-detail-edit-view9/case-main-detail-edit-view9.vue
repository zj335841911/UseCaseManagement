<template src="./case-main-detail-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainDetailEditView9Base } from './case-main-detail-edit-view9-base';
import view_form from '@widgets/case/main-detail-form/main-detail-form.vue';

/**
 * 测试用例编辑视图视图
 *
 * @export
 * @class CaseMainDetailEditView9
 * @extends {CaseMainDetailEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseMainDetailEditView9 extends CaseMainDetailEditView9Base {}
</script>
