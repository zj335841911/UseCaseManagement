<template src="./case-lastrunner-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseLastrunnerPortletBase } from './case-lastrunner-portlet-base';
import view_dashboard_sysportlet4_chart from '@widgets/case/case-lastrunner-chart/case-lastrunner-chart.vue';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class CaseLastrunnerPortlet
 * @extends {CaseLastrunnerPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseLastrunnerPortlet extends CaseLastrunnerPortletBase {}
</script>
