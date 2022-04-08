<template src="./story-related-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryRelatedPortletBase } from './story-related-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class StoryRelatedPortlet
 * @extends {StoryRelatedPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StoryRelatedPortlet extends StoryRelatedPortletBase {}
</script>
