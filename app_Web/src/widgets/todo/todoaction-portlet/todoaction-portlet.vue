<template src="./todoaction-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoactionPortletBase } from './todoaction-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class TodoactionPortlet
 * @extends {TodoactionPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TodoactionPortlet extends TodoactionPortletBase {}
</script>
