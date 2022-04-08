<template src="./dashboard-basic-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardBasicEditFormBase } from './dashboard-basic-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashboardBasicEditForm
 * @extends {DashboardBasicEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardBasicEditForm extends DashboardBasicEditFormBase {}
</script>
