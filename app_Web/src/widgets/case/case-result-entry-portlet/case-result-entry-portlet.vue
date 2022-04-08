<template src="./case-result-entry-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseResultEntryPortletBase } from './case-result-entry-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class CaseResultEntryPortlet
 * @extends {CaseResultEntryPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class CaseResultEntryPortlet extends CaseResultEntryPortletBase { }
</script>
