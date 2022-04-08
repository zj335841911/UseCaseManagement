<template src="./recent-update-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { RecentUpdatePortletBase } from './recent-update-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class RecentUpdatePortlet
 * @extends {RecentUpdatePortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class RecentUpdatePortlet extends RecentUpdatePortletBase {}
</script>
