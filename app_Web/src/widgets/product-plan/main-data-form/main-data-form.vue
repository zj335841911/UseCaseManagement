<template src="./main-data-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDataEditFormBase } from './main-data-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainDataEditForm
 * @extends {MainDataEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainDataEditForm extends MainDataEditFormBase {}
</script>
