<template src="./action-bar-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionBarPortletBase } from './action-bar-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class ActionBarPortlet
 * @extends {ActionBarPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ActionBarPortlet extends ActionBarPortletBase {}
</script>
