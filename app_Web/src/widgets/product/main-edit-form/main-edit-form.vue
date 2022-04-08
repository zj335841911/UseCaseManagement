<template src="./main-edit-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_EditEditFormBase } from './main-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Main_EditEditForm
 * @extends {Main_EditEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_EditEditForm extends Main_EditEditFormBase {}
</script>
<style lang="less">
@import './main-edit-form.less';
</style>
