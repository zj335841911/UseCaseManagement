<template src="./info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { INFOEditFormBase } from './info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class INFOEditForm
 * @extends {INFOEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class INFOEditForm extends INFOEditFormBase { }
</script>
