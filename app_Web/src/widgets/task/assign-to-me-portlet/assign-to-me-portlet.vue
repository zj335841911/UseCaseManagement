<template src="./assign-to-me-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignToMePortletBase } from './assign-to-me-portlet-base';
 

/**
 * dashboard_sysportlet6部件
 *
 * @export
 * @class AssignToMePortlet
 * @extends {AssignToMePortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AssignToMePortlet extends AssignToMePortletBase {}
</script>
