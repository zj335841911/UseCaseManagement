<template src="./main-new-mode-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_NewModeEditFormBase } from './main-new-mode-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Main_NewModeEditForm
 * @extends {Main_NewModeEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_NewModeEditForm extends Main_NewModeEditFormBase {}
</script>
