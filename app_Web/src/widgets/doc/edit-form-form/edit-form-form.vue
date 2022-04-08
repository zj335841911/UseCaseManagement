<template src="./edit-form-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { EditFormEditFormBase } from './edit-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class EditFormEditForm
 * @extends {EditFormEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class EditFormEditForm extends EditFormEditFormBase { }
</script>
