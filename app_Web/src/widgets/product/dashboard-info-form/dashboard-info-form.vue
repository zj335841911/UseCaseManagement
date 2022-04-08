<template src="./dashboard-info-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardInfoEditFormBase } from './dashboard-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashboardInfoEditForm
 * @extends {DashboardInfoEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardInfoEditForm extends DashboardInfoEditFormBase {}
</script>
<style lang="less">
@import './dashboard-info-form.less';
</style>
