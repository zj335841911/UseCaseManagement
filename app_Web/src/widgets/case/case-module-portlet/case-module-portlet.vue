<template src="./case-module-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseModulePortletBase } from './case-module-portlet-base';
import view_dashboard_sysportlet3_chart from '@widgets/case/case-module-chart/case-module-chart.vue';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class CaseModulePortlet
 * @extends {CaseModulePortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet3_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseModulePortlet extends CaseModulePortletBase {}
</script>
