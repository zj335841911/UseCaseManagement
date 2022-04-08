<template src="./project-story-stats-searchform.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStoryStatsSearchFormBase } from './project-story-stats-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class ProjectStoryStatsSearchForm
 * @extends {ProjectStoryStatsSearchFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStoryStatsSearchForm extends ProjectStoryStatsSearchFormBase {}
</script>
