<template src="./project-status-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatusSearchFormBase } from './project-status-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class ProjectStatusSearchForm
 * @extends {ProjectStatusSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStatusSearchForm extends ProjectStatusSearchFormBase {}
</script>
