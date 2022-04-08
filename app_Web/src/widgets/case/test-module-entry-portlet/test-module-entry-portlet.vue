<template src="./test-module-entry-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestModuleEntryPortletBase } from './test-module-entry-portlet-base';
 

/**
 * dashboard_sysportlet7部件
 *
 * @export
 * @class TestModuleEntryPortlet
 * @extends {TestModuleEntryPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TestModuleEntryPortlet extends TestModuleEntryPortletBase { }
</script>
