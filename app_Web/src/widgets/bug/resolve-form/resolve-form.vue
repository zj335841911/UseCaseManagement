<template src="./resolve-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ResolveEditFormBase } from './resolve-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ResolveEditForm
 * @extends {ResolveEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ResolveEditForm extends ResolveEditFormBase {}
</script>
