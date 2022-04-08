<template src="./case-new-edit-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseNewEditPortletBase } from './case-new-edit-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class CaseNewEditPortlet
 * @extends {CaseNewEditPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseNewEditPortlet extends CaseNewEditPortletBase {}
</script>
