<template src="./storyspec-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryspecPortletBase } from './storyspec-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class StoryspecPortlet
 * @extends {StoryspecPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StoryspecPortlet extends StoryspecPortletBase {}
</script>
