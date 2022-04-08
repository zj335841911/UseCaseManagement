<template src="./total-opened-bug-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TotalOpenedBugPortletBase } from './total-opened-bug-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class TotalOpenedBugPortlet
 * @extends {TotalOpenedBugPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TotalOpenedBugPortlet extends TotalOpenedBugPortletBase { }
</script>
