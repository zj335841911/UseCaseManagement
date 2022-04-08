<template src="./doc-sum-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocSumPortletBase } from './doc-sum-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class DocSumPortlet
 * @extends {DocSumPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocSumPortlet extends DocSumPortletBase {}
</script>
