<template src="./main-project-new-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainProjectNewEditFormBase } from './main-project-new-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainProjectNewEditForm
 * @extends {MainProjectNewEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainProjectNewEditForm extends MainProjectNewEditFormBase {}
</script>
