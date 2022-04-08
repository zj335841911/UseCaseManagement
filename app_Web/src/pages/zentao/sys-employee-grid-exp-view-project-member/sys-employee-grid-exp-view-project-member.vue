<template src="./sys-employee-grid-exp-view-project-member.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeGridExpViewProjectMemberBase } from './sys-employee-grid-exp-view-project-member-base';
import view_gridexpbar from '@widgets/sys-employee/grid-exp-view-project-membergridexpbar-gridexpbar/grid-exp-view-project-membergridexpbar-gridexpbar.vue';

/**
 * 人员表格导航视图视图
 *
 * @export
 * @class SysEmployeeGridExpViewProjectMember
 * @extends {SysEmployeeGridExpViewProjectMemberBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeGridExpViewProjectMember extends SysEmployeeGridExpViewProjectMemberBase {}
</script>
