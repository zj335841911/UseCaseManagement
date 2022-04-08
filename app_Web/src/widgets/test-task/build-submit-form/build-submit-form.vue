<template src="./build-submit-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildSUBMITEditFormBase } from './build-submit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class BuildSUBMITEditForm
 * @extends {BuildSUBMITEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BuildSUBMITEditForm extends BuildSUBMITEditFormBase {}
</script>
