<template src="./dash-borad-info-view-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashBoradInfoViewPortletBase } from './dash-borad-info-view-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class DashBoradInfoViewPortlet
 * @extends {DashBoradInfoViewPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashBoradInfoViewPortlet extends DashBoradInfoViewPortletBase {}
</script>
