<template src="./mainbody-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainbodyEditFormBase } from './mainbody-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainbodyEditForm
 * @extends {MainbodyEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainbodyEditForm extends MainbodyEditFormBase {}
</script>
<style lang="less">
@import './mainbody-form.less';
</style>
