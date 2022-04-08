<template src="./cur-finishedby-task-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurFinishedbyTaskPortletBase } from './cur-finishedby-task-portlet-base';
import view_dashboard_sysportlet3_chart from '@widgets/task/my-finishedby-task-chart/my-finishedby-task-chart.vue';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class CurFinishedbyTaskPortlet
 * @extends {CurFinishedbyTaskPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet3_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CurFinishedbyTaskPortlet extends CurFinishedbyTaskPortletBase {}
</script>
