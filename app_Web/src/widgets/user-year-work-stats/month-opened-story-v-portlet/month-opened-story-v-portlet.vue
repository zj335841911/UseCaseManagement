<template src="./month-opened-story-v-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthOpenedStoryVPortletBase } from './month-opened-story-v-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class MonthOpenedStoryVPortlet
 * @extends {MonthOpenedStoryVPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MonthOpenedStoryVPortlet extends MonthOpenedStoryVPortletBase { }
</script>
