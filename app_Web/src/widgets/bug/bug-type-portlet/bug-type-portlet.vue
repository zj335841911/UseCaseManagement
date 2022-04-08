<template src="./bug-type-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTypePortletBase } from './bug-type-portlet-base';
import view_dashboard_sysportlet10_chart from '@widgets/bug/bug-type-chart/bug-type-chart.vue';
 

/**
 * dashboard_sysportlet10部件
 *
 * @export
 * @class BugTypePortlet
 * @extends {BugTypePortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet10_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugTypePortlet extends BugTypePortletBase {}
</script>
