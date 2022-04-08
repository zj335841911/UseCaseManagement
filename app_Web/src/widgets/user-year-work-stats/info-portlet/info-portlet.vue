<template src="./info-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InfoPortletBase } from './info-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class InfoPortlet
 * @extends {InfoPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class InfoPortlet extends InfoPortletBase { }
</script>
