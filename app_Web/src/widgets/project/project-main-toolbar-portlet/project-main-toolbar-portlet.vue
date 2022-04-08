<template src="./project-main-toolbar-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainToolbarPortletBase } from './project-main-toolbar-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class ProjectMainToolbarPortlet
 * @extends {ProjectMainToolbarPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectMainToolbarPortlet extends ProjectMainToolbarPortletBase {}
</script>
