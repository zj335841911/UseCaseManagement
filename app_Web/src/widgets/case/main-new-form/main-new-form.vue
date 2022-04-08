<template src="./main-new-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainNewEditFormBase } from './main-new-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainNewEditForm
 * @extends {MainNewEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainNewEditForm extends MainNewEditFormBase {}
</script>
