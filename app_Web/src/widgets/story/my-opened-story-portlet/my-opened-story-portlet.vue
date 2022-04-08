<template src="./my-opened-story-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyOpenedStoryPortletBase } from './my-opened-story-portlet-base';
import view_dashboard_sysportlet6_chart from '@widgets/story/my-opened-story-chart/my-opened-story-chart.vue';
 

/**
 * dashboard_sysportlet6部件
 *
 * @export
 * @class MyOpenedStoryPortlet
 * @extends {MyOpenedStoryPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6_chart, 
         
    }
})
@VueLifeCycleProcessing()
export default class MyOpenedStoryPortlet extends MyOpenedStoryPortletBase { }
</script>
