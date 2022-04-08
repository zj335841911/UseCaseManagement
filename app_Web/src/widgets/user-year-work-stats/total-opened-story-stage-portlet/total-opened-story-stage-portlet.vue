<template src="./total-opened-story-stage-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TotalOpenedStoryStagePortletBase } from './total-opened-story-stage-portlet-base';
 

/**
 * dashboard_sysportlet7部件
 *
 * @export
 * @class TotalOpenedStoryStagePortlet
 * @extends {TotalOpenedStoryStagePortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TotalOpenedStoryStagePortlet extends TotalOpenedStoryStagePortletBase { }
</script>
