<template src="./main-r-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainREditFormBase } from './main-r-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainREditForm
 * @extends {MainREditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainREditForm extends MainREditFormBase {}
</script>
<style lang="less">
@import './main-r-form.less';
</style>
