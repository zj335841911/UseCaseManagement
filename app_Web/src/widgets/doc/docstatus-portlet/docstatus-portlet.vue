<template src="./docstatus-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DOCSTATUSPortletBase } from './docstatus-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class DOCSTATUSPortlet
 * @extends {DOCSTATUSPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DOCSTATUSPortlet extends DOCSTATUSPortletBase {}
</script>
