<template src="./resolve-bug-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ResolveBugPortletBase } from './resolve-bug-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class ResolveBugPortlet
 * @extends {ResolveBugPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ResolveBugPortlet extends ResolveBugPortletBase { }
</script>
