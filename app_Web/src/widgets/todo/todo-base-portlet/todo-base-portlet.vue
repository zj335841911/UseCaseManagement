<template src="./todo-base-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoBasePortletBase } from './todo-base-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class TodoBasePortlet
 * @extends {TodoBasePortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TodoBasePortlet extends TodoBasePortletBase {}
</script>
