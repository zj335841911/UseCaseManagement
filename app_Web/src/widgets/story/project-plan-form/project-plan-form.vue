<template src="./project-plan-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectPlanEditFormBase } from './project-plan-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ProjectPlanEditForm
 * @extends {ProjectPlanEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectPlanEditForm extends ProjectPlanEditFormBase {}
</script>
