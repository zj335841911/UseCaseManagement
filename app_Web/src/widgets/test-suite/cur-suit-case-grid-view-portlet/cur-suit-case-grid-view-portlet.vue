<template src="./cur-suit-case-grid-view-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurSuitCaseGridViewPortletBase } from './cur-suit-case-grid-view-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class CurSuitCaseGridViewPortlet
 * @extends {CurSuitCaseGridViewPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CurSuitCaseGridViewPortlet extends CurSuitCaseGridViewPortletBase {}
</script>
