<template src="./toolbar-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ToolbarPortletBase } from './toolbar-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class ToolbarPortlet
 * @extends {ToolbarPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ToolbarPortlet extends ToolbarPortletBase {}
</script>
