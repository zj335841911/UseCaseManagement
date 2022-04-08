<template src="./project-exp-view-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectExpViewPortletBase } from './project-exp-view-portlet-base';
 

/**
 * dashboard_sysportlet8部件
 *
 * @export
 * @class ProjectExpViewPortlet
 * @extends {ProjectExpViewPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectExpViewPortlet extends ProjectExpViewPortletBase {}
</script>
