<template src="./project-new-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Project_NewEditFormBase } from './project-new-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Project_NewEditForm
 * @extends {Project_NewEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Project_NewEditForm extends Project_NewEditFormBase {}
</script>
