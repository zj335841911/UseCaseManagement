<template src="./total-opened-case-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TotalOpenedCasePortletBase } from './total-opened-case-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class TotalOpenedCasePortlet
 * @extends {TotalOpenedCasePortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TotalOpenedCasePortlet extends TotalOpenedCasePortletBase { }
</script>
