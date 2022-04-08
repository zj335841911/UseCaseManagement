<template src="./test-task-rmain-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskRMainEditFormBase } from './test-task-rmain-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TestTaskRMainEditForm
 * @extends {TestTaskRMainEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestTaskRMainEditForm extends TestTaskRMainEditFormBase {}
</script>
<style lang="less">
@import './test-task-rmain-form.less';
</style>
