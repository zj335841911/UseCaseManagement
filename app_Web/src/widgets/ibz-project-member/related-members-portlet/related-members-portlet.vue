<template src="./related-members-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { RelatedMembersPortletBase } from './related-members-portlet-base';
 

/**
 * dashboard_sysportlet6部件
 *
 * @export
 * @class RelatedMembersPortlet
 * @extends {RelatedMembersPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class RelatedMembersPortlet extends RelatedMembersPortletBase {}
</script>
