<template src="./my-report-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyReportPortletBase } from './my-report-portlet-base';
 

/**
 * dashboard_sysportlet12部件
 *
 * @export
 * @class MyReportPortlet
 * @extends {MyReportPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyReportPortlet extends MyReportPortletBase {}
</script>
