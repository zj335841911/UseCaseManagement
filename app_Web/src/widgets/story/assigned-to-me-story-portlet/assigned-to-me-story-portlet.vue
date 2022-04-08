<template src="./assigned-to-me-story-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignedToMeStoryPortletBase } from './assigned-to-me-story-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class AssignedToMeStoryPortlet
 * @extends {AssignedToMeStoryPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AssignedToMeStoryPortlet extends AssignedToMeStoryPortletBase {}
</script>
