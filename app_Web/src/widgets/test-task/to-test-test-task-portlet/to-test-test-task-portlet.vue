<template src="./to-test-test-task-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ToTestTestTaskPortletBase } from './to-test-test-task-portlet-base';
 

/**
 * db_sysportlet1部件
 *
 * @export
 * @class ToTestTestTaskPortlet
 * @extends {ToTestTestTaskPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ToTestTestTaskPortlet extends ToTestTestTaskPortletBase {}
</script>
