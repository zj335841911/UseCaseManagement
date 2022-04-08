<template src="./main-detail-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDetailEditFormBase } from './main-detail-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainDetailEditForm
 * @extends {MainDetailEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainDetailEditForm extends MainDetailEditFormBase {}
</script>
