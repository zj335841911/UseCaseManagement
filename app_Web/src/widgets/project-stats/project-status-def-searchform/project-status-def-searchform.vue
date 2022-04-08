<template src="./project-status-def-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatusDefSearchFormBase } from './project-status-def-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class ProjectStatusDefSearchForm
 * @extends {ProjectStatusDefSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStatusDefSearchForm extends ProjectStatusDefSearchFormBase {}
</script>
