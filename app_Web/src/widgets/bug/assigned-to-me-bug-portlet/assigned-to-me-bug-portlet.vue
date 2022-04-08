<template src="./assigned-to-me-bug-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedToMeBugPortletBase } from './assigned-to-me-bug-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class AssignedToMeBugPortlet
 * @extends {AssignedToMeBugPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AssignedToMeBugPortlet extends AssignedToMeBugPortletBase {}
</script>
