<template src="./main-test-task-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainTestTaskEditFormBase } from './main-test-task-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainTestTaskEditForm
 * @extends {MainTestTaskEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainTestTaskEditForm extends MainTestTaskEditFormBase {}
</script>
<style lang="less">
@import './main-test-task-form.less';
</style>
