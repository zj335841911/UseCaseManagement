<template src="./sys-employee-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeEditViewBase } from './sys-employee-edit-view-base';
import view_form from '@widgets/sys-employee/main-form/main-form.vue';

/**
 * 人员编辑视图视图
 *
 * @export
 * @class SysEmployeeEditView
 * @extends {SysEmployeeEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeEditView extends SysEmployeeEditViewBase {}
</script>
