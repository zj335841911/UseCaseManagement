<template src="./finishedby-task-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FinishedbyTaskPortletBase } from './finishedby-task-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class FinishedbyTaskPortlet
 * @extends {FinishedbyTaskPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class FinishedbyTaskPortlet extends FinishedbyTaskPortletBase { }
</script>
