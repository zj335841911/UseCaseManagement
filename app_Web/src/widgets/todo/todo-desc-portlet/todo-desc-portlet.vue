<template src="./todo-desc-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoDescPortletBase } from './todo-desc-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class TodoDescPortlet
 * @extends {TodoDescPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TodoDescPortlet extends TodoDescPortletBase {}
</script>
