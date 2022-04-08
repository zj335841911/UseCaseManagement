<template src="./total-opened-story-pri-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TotalOpenedStoryPriPortletBase } from './total-opened-story-pri-portlet-base';
 

/**
 * dashboard_sysportlet6部件
 *
 * @export
 * @class TotalOpenedStoryPriPortlet
 * @extends {TotalOpenedStoryPriPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TotalOpenedStoryPriPortlet extends TotalOpenedStoryPriPortletBase { }
</script>
