<template src="./case-main-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainPortletBase } from './case-main-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class CaseMainPortlet
 * @extends {CaseMainPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseMainPortlet extends CaseMainPortletBase {}
</script>
