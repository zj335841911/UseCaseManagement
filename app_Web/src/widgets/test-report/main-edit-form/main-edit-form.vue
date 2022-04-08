<template src="./main-edit-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainEditEditFormBase } from './main-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainEditEditForm
 * @extends {MainEditEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainEditEditForm extends MainEditEditFormBase {}
</script>
