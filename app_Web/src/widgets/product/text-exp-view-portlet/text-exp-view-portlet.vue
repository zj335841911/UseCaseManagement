<template src="./text-exp-view-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TextExpViewPortletBase } from './text-exp-view-portlet-base';
 

/**
 * dashboard_sysportlet9部件
 *
 * @export
 * @class TextExpViewPortlet
 * @extends {TextExpViewPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TextExpViewPortlet extends TextExpViewPortletBase {}
</script>
