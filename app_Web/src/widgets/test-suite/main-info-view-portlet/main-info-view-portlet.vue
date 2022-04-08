<template src="./main-info-view-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainInfoViewPortletBase } from './main-info-view-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class MainInfoViewPortlet
 * @extends {MainInfoViewPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainInfoViewPortlet extends MainInfoViewPortletBase {}
</script>
