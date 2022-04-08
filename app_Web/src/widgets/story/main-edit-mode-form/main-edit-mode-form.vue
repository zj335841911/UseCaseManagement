<template src="./main-edit-mode-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_EditModeEditFormBase } from './main-edit-mode-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Main_EditModeEditForm
 * @extends {Main_EditModeEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_EditModeEditForm extends Main_EditModeEditFormBase {}
</script>
<style lang="less">
@import './main-edit-mode-form.less';
</style>
