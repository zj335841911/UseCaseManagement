<template src="./dashboard-main-edit-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardMainEditEditFormBase } from './dashboard-main-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashboardMainEditEditForm
 * @extends {DashboardMainEditEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardMainEditEditForm extends DashboardMainEditEditFormBase {}
</script>
