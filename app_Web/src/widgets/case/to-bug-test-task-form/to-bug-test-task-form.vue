<template src="./to-bug-test-task-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ToBugTestTaskEditFormBase } from './to-bug-test-task-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ToBugTestTaskEditForm
 * @extends {ToBugTestTaskEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ToBugTestTaskEditForm extends ToBugTestTaskEditFormBase {}
</script>
<style lang="less">
@import './to-bug-test-task-form.less';
</style>
