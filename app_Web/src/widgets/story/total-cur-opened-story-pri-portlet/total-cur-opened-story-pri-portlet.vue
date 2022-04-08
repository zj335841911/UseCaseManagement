<template src="./total-cur-opened-story-pri-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TotalCurOpenedStoryPriPortletBase } from './total-cur-opened-story-pri-portlet-base';
import view_dashboard_sysportlet6_chart from '@widgets/story/my-opened-story-chart/my-opened-story-chart.vue';
 

/**
 * dashboard_sysportlet6部件
 *
 * @export
 * @class TotalCurOpenedStoryPriPortlet
 * @extends {TotalCurOpenedStoryPriPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class TotalCurOpenedStoryPriPortlet extends TotalCurOpenedStoryPriPortletBase {}
</script>
