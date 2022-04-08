<template src="./exp-main-edit-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpMainEditEditFormBase } from './exp-main-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ExpMainEditEditForm
 * @extends {ExpMainEditEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ExpMainEditEditForm extends ExpMainEditEditFormBase {}
</script>
