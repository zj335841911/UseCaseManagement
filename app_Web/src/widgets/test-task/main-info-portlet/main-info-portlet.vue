<template src="./main-info-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainInfoPortletBase } from './main-info-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class MainInfoPortlet
 * @extends {MainInfoPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainInfoPortlet extends MainInfoPortletBase {}
</script>
