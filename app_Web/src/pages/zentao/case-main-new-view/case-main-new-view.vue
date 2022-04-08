<template src="./case-main-new-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainNewViewBase } from './case-main-new-view-base';
import view_form from '@widgets/case/main-new-form/main-new-form.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseMainNewView
 * @extends {CaseMainNewViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseMainNewView extends CaseMainNewViewBase {}
</script>
