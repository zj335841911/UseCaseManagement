<template src="./product-main-toolbar-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductMainToolbarPortletBase } from './product-main-toolbar-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class ProductMainToolbarPortlet
 * @extends {ProductMainToolbarPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductMainToolbarPortlet extends ProductMainToolbarPortletBase {}
</script>
