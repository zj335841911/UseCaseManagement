<template src="./new-edit-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { NewEditEditFormBase } from './new-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class NewEditEditForm
 * @extends {NewEditEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class NewEditEditForm extends NewEditEditFormBase {}
</script>
