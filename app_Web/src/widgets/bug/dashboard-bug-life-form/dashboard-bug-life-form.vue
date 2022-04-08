<template src="./dashboard-bug-life-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardBugLifeEditFormBase } from './dashboard-bug-life-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashboardBugLifeEditForm
 * @extends {DashboardBugLifeEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardBugLifeEditForm extends DashboardBugLifeEditFormBase {}
</script>
<style lang="less">
@import './dashboard-bug-life-form.less';
</style>
