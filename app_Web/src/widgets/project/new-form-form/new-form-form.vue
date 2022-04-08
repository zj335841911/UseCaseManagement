<template src="./new-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { NewFormEditFormBase } from './new-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class NewFormEditForm
 * @extends {NewFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class NewFormEditForm extends NewFormEditFormBase {}
</script>
