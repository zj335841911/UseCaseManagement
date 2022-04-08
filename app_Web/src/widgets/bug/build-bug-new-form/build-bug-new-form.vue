<template src="./build-bug-new-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildBugNewEditFormBase } from './build-bug-new-form-base';
 

/**
 * form部件
 *
 * @export
 * @class BuildBugNewEditForm
 * @extends {BuildBugNewEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BuildBugNewEditForm extends BuildBugNewEditFormBase {}
</script>
