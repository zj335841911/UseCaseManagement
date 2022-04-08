<template src="./test-main2-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestMain2EditFormBase } from './test-main2-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TestMain2EditForm
 * @extends {TestMain2EditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestMain2EditForm extends TestMain2EditFormBase {}
</script>
<style lang="less">
@import './test-main2-form.less';
</style>
