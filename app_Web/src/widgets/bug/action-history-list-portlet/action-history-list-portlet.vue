<template src="./action-history-list-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionHistoryListPortletBase } from './action-history-list-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class ActionHistoryListPortlet
 * @extends {ActionHistoryListPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ActionHistoryListPortlet extends ActionHistoryListPortletBase {}
</script>
