<template src="./month-finish-task-and-bug-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthFinishTaskAndBugPortletBase } from './month-finish-task-and-bug-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class MonthFinishTaskAndBugPortlet
 * @extends {MonthFinishTaskAndBugPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MonthFinishTaskAndBugPortlet extends MonthFinishTaskAndBugPortletBase { }
</script>
