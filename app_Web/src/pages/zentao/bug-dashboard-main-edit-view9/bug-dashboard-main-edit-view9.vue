<template src="./bug-dashboard-main-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugDashboardMainEditView9Base } from './bug-dashboard-main-edit-view9-base';
import view_form from '@widgets/bug/dashboard-main-form/dashboard-main-form.vue';

/**
 * 主信息视图
 *
 * @export
 * @class BugDashboardMainEditView9
 * @extends {BugDashboardMainEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugDashboardMainEditView9 extends BugDashboardMainEditView9Base {}
</script>
