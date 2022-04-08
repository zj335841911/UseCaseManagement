<template src="./person-info-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PersonInfoPortletBase } from './person-info-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class PersonInfoPortlet
 * @extends {PersonInfoPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PersonInfoPortlet extends PersonInfoPortletBase {}
</script>
