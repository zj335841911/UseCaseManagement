<template src="./info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InfoEditFormBase } from './info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class InfoEditForm
 * @extends {InfoEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class InfoEditForm extends InfoEditFormBase { }
</script>
