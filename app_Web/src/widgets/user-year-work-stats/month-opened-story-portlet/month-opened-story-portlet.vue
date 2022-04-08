<template src="./month-opened-story-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthOpenedStoryPortletBase } from './month-opened-story-portlet-base';
import view_dashboard_sysportlet5_chart from '@widgets/user-year-work-stats/month-opened-story-chart/month-opened-story-chart.vue';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class MonthOpenedStoryPortlet
 * @extends {MonthOpenedStoryPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet5_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class MonthOpenedStoryPortlet extends MonthOpenedStoryPortletBase {}
</script>
