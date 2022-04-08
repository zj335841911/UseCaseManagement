<template src="./case-info-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseInfoPortletBase } from './case-info-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class CaseInfoPortlet
 * @extends {CaseInfoPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseInfoPortlet extends CaseInfoPortletBase {}
</script>
