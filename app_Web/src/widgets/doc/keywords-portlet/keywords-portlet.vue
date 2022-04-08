<template src="./keywords-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { KeywordsPortletBase } from './keywords-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class KeywordsPortlet
 * @extends {KeywordsPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class KeywordsPortlet extends KeywordsPortletBase {}
</script>
