<template src="./main-body-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainBodyPortletBase } from './main-body-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class MainBodyPortlet
 * @extends {MainBodyPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainBodyPortlet extends MainBodyPortletBase {}
</script>
