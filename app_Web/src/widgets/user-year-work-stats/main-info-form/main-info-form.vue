<template src="./main-info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainInfoEditFormBase } from './main-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainInfoEditForm
 * @extends {MainInfoEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainInfoEditForm extends MainInfoEditFormBase { }
</script>
<style lang='less'>
@import './main-info-form.less';
</style>
