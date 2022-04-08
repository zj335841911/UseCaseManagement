<template src="./project-new-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectNewEditFormBase } from './project-new-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ProjectNewEditForm
 * @extends {ProjectNewEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectNewEditForm extends ProjectNewEditFormBase {}
</script>
