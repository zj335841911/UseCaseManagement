<template src="./project-task-type-count-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTaskTypeCountSearchFormBase } from './project-task-type-count-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class ProjectTaskTypeCountSearchForm
 * @extends {ProjectTaskTypeCountSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTaskTypeCountSearchForm extends ProjectTaskTypeCountSearchFormBase {}
</script>
