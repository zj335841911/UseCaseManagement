<template src="./last-update-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { LastUpdatePortletBase } from './last-update-portlet-base';
 

/**
 * dashboard_sysportlet11部件
 *
 * @export
 * @class LastUpdatePortlet
 * @extends {LastUpdatePortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class LastUpdatePortlet extends LastUpdatePortletBase {}
</script>
