<template src="./employeeloadedit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { EMPLOYEELOADEditViewBase } from './employeeloadedit-view-base';
import view_form from '@widgets/emp-loyeeload/main-form/main-form.vue';

/**
 * 员工负载表编辑视图视图
 *
 * @export
 * @class EMPLOYEELOADEditView
 * @extends {EMPLOYEELOADEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class EMPLOYEELOADEditView extends EMPLOYEELOADEditViewBase {}
</script>
