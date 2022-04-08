<template src="./case-main-info-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainInfoEditView9Base } from './case-main-info-edit-view9-base';
import view_form from '@widgets/case/main-info-form/main-info-form.vue';

/**
 * 测试用例编辑视图视图
 *
 * @export
 * @class CaseMainInfoEditView9
 * @extends {CaseMainInfoEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseMainInfoEditView9 extends CaseMainInfoEditView9Base {}
</script>
