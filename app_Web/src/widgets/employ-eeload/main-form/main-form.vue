<template src="./main-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainEditFormBase } from './main-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainEditForm
 * @extends {MainEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainEditForm extends MainEditFormBase { }
</script>
