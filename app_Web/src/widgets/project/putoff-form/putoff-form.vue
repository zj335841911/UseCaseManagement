<template src="./putoff-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PutoffEditFormBase } from './putoff-form-base';
 

/**
 * form部件
 *
 * @export
 * @class PutoffEditForm
 * @extends {PutoffEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PutoffEditForm extends PutoffEditFormBase {}
</script>
