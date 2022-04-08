<template src="./all-trends-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AllTrendsPortletBase } from './all-trends-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class AllTrendsPortlet
 * @extends {AllTrendsPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AllTrendsPortlet extends AllTrendsPortletBase {}
</script>
