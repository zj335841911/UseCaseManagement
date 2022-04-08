<template src="./action-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionEditFormBase } from './action-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ActionEditForm
 * @extends {ActionEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ActionEditForm extends ActionEditFormBase {}
</script>
