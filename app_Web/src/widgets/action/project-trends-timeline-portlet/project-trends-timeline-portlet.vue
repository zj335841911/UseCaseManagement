<template src="./project-trends-timeline-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTrendsTimelinePortletBase } from './project-trends-timeline-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class ProjectTrendsTimelinePortlet
 * @extends {ProjectTrendsTimelinePortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTrendsTimelinePortlet extends ProjectTrendsTimelinePortletBase {}
</script>
