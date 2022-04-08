<template src="./title-form-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TitleFormEditFormBase } from './title-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TitleFormEditForm
 * @extends {TitleFormEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TitleFormEditForm extends TitleFormEditFormBase { }
</script>
<style lang='less'>
@import './title-form-form.less';
</style>
