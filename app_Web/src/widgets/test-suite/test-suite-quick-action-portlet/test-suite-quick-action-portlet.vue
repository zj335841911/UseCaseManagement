<template src="./test-suite-quick-action-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSuiteQuickActionPortletBase } from './test-suite-quick-action-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class TestSuiteQuickActionPortlet
 * @extends {TestSuiteQuickActionPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestSuiteQuickActionPortlet extends TestSuiteQuickActionPortletBase {}
</script>
