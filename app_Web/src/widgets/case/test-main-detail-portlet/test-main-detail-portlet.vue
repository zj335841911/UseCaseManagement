<template src="./test-main-detail-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestMainDetailPortletBase } from './test-main-detail-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class TestMainDetailPortlet
 * @extends {TestMainDetailPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestMainDetailPortlet extends TestMainDetailPortletBase {}
</script>
