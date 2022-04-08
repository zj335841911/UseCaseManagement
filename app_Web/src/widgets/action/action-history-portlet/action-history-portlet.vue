<template src="./action-history-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionHistoryPortletBase } from './action-history-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class ActionHistoryPortlet
 * @extends {ActionHistoryPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ActionHistoryPortlet extends ActionHistoryPortletBase {}
</script>
