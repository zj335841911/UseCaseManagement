<template src="./quick-create-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { QuickCreateEditFormBase } from './quick-create-form-base';
 

/**
 * form部件
 *
 * @export
 * @class QuickCreateEditForm
 * @extends {QuickCreateEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class QuickCreateEditForm extends QuickCreateEditFormBase {}
</script>
