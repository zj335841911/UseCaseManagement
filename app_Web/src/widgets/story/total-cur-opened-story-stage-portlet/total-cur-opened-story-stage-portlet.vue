<template src="./total-cur-opened-story-stage-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TotalCurOpenedStoryStagePortletBase } from './total-cur-opened-story-stage-portlet-base';
import view_dashboard_sysportlet7_chart from '@widgets/story/my-opened-story-stage-chart/my-opened-story-stage-chart.vue';
 

/**
 * dashboard_sysportlet7部件
 *
 * @export
 * @class TotalCurOpenedStoryStagePortlet
 * @extends {TotalCurOpenedStoryStagePortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet7_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class TotalCurOpenedStoryStagePortlet extends TotalCurOpenedStoryStagePortletBase {}
</script>
