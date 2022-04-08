<template src="./main-l-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainLEditFormBase } from './main-l-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainLEditForm
 * @extends {MainLEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainLEditForm extends MainLEditFormBase {}
</script>
