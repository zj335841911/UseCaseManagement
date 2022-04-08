<template src="./basic-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BasicPortletBase } from './basic-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class BasicPortlet
 * @extends {BasicPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BasicPortlet extends BasicPortletBase {}
</script>
