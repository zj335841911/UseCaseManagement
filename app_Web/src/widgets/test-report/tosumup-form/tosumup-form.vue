<template src="./tosumup-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TosumupEditFormBase } from './tosumup-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TosumupEditForm
 * @extends {TosumupEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TosumupEditForm extends TosumupEditFormBase {}
</script>
