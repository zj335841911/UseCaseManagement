<template src="./task-estimate-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskEstimateEditFormBase } from './task-estimate-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TaskEstimateEditForm
 * @extends {TaskEstimateEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskEstimateEditForm extends TaskEstimateEditFormBase {}
</script>
<style lang="less">
@import './task-estimate-form.less';
</style>
