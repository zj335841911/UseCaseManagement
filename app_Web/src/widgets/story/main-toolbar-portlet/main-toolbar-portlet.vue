<template src="./main-toolbar-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainToolbarPortletBase } from './main-toolbar-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class MainToolbarPortlet
 * @extends {MainToolbarPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainToolbarPortlet extends MainToolbarPortletBase {}
</script>
