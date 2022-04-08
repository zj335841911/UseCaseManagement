<template src="./get-roadmaps-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GetRoadmapsPortletBase } from './get-roadmaps-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class GetRoadmapsPortlet
 * @extends {GetRoadmapsPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class GetRoadmapsPortlet extends GetRoadmapsPortletBase {}
</script>
