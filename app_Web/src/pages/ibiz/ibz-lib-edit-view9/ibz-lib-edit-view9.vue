<template src="./ibz-lib-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibEditView9Base } from './ibz-lib-edit-view9-base';
import view_form from '@widgets/ibz-lib/desc-form/desc-form.vue';

/**
 * 用例库编辑视图视图
 *
 * @export
 * @class IbzLibEditView9
 * @extends {IbzLibEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibEditView9 extends IbzLibEditView9Base {}
</script>
