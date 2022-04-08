<template src="./product-info-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductInfoPortletBase } from './product-info-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class ProductInfoPortlet
 * @extends {ProductInfoPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductInfoPortlet extends ProductInfoPortletBase {}
</script>
