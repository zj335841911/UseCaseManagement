<template src="./person-basic-information-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PersonBasicInformationPortletBase } from './person-basic-information-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class PersonBasicInformationPortlet
 * @extends {PersonBasicInformationPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PersonBasicInformationPortlet extends PersonBasicInformationPortletBase {}
</script>
