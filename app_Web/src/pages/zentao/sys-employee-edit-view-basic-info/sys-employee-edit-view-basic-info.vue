<template src="./sys-employee-edit-view-basic-info.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeEditViewBasicInfoBase } from './sys-employee-edit-view-basic-info-base';
import view_form from '@widgets/sys-employee/personal-info-main-form/personal-info-main-form.vue';

/**
 * 人员编辑视图视图
 *
 * @export
 * @class SysEmployeeEditViewBasicInfo
 * @extends {SysEmployeeEditViewBasicInfoBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeEditViewBasicInfo extends SysEmployeeEditViewBasicInfoBase {}
</script>
