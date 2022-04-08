<template src="./new-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { NewEditFormBase } from './new-form-base';
 

/**
 * form部件
 *
 * @export
 * @class NewEditForm
 * @extends {NewEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class NewEditForm extends NewEditFormBase {}
</script>
