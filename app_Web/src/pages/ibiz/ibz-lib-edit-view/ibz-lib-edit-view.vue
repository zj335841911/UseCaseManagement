<template src="./ibz-lib-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibEditViewBase } from './ibz-lib-edit-view-base';
import view_form from '@widgets/ibz-lib/main-form/main-form.vue';

/**
 * 用例库编辑视图视图
 *
 * @export
 * @class IbzLibEditView
 * @extends {IbzLibEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibEditView extends IbzLibEditViewBase {}
</script>
