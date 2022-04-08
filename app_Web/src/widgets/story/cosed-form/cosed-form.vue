<template src="./cosed-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CosedEditFormBase } from './cosed-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CosedEditForm
 * @extends {CosedEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CosedEditForm extends CosedEditFormBase {}
</script>
