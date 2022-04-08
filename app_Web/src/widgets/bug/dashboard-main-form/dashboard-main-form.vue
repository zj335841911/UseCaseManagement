<template src="./dashboard-main-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardMainEditFormBase } from './dashboard-main-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashboardMainEditForm
 * @extends {DashboardMainEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardMainEditForm extends DashboardMainEditFormBase {}
</script>
<style lang="less">
@import './dashboard-main-form.less';
</style>
