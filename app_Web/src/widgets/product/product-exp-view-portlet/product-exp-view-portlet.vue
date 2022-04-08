<template src="./product-exp-view-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductExpViewPortletBase } from './product-exp-view-portlet-base';
 

/**
 * dashboard_sysportlet7部件
 *
 * @export
 * @class ProductExpViewPortlet
 * @extends {ProductExpViewPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductExpViewPortlet extends ProductExpViewPortletBase {}
</script>
