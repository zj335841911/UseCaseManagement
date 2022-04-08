<template src="./doc-action-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocActionPortletBase } from './doc-action-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class DocActionPortlet
 * @extends {DocActionPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocActionPortlet extends DocActionPortletBase {}
</script>
