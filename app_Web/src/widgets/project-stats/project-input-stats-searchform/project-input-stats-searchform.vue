<template src="./project-input-stats-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectInputStatsSearchFormBase } from './project-input-stats-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class ProjectInputStatsSearchForm
 * @extends {ProjectInputStatsSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectInputStatsSearchForm extends ProjectInputStatsSearchFormBase {}
</script>
