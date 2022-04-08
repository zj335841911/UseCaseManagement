<template src="./suspend-nclose-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SuspendNCloseEditFormBase } from './suspend-nclose-form-base';
 

/**
 * form部件
 *
 * @export
 * @class SuspendNCloseEditForm
 * @extends {SuspendNCloseEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class SuspendNCloseEditForm extends SuspendNCloseEditFormBase {}
</script>
