<template src="./info-edit-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InfoEditEditFormBase } from './info-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class InfoEditEditForm
 * @extends {InfoEditEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class InfoEditEditForm extends InfoEditEditFormBase {}
</script>
