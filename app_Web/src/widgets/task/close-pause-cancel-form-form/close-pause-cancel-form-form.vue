<template src="./close-pause-cancel-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ClosePauseCancelFormEditFormBase } from './close-pause-cancel-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ClosePauseCancelFormEditForm
 * @extends {ClosePauseCancelFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ClosePauseCancelFormEditForm extends ClosePauseCancelFormEditFormBase {}
</script>
