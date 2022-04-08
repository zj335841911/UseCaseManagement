<template src="./main-carry-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainCarryEditFormBase } from './main-carry-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainCarryEditForm
 * @extends {MainCarryEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainCarryEditForm extends MainCarryEditFormBase {}
</script>
<style lang="less">
@import './main-carry-form.less';
</style>
