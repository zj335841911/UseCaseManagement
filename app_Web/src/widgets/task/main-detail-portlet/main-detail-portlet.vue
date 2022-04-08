<template src="./main-detail-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDetailPortletBase } from './main-detail-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class MainDetailPortlet
 * @extends {MainDetailPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainDetailPortlet extends MainDetailPortletBase {}
</script>
