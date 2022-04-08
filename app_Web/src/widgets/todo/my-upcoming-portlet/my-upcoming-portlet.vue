<template src="./my-upcoming-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyUpcomingPortletBase } from './my-upcoming-portlet-base';
 

/**
 * dashboard_sysportlet10部件
 *
 * @export
 * @class MyUpcomingPortlet
 * @extends {MyUpcomingPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyUpcomingPortlet extends MyUpcomingPortletBase {}
</script>
