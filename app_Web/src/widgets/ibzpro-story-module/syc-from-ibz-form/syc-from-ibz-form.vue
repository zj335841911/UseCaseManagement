<template src="./syc-from-ibz-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SycFromIbzEditFormBase } from './syc-from-ibz-form-base';
 

/**
 * form部件
 *
 * @export
 * @class SycFromIbzEditForm
 * @extends {SycFromIbzEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class SycFromIbzEditForm extends SycFromIbzEditFormBase { }
</script>
