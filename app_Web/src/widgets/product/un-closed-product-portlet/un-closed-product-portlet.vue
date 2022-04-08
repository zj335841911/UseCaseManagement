<template src="./un-closed-product-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UnClosedProductPortletBase } from './un-closed-product-portlet-base';
 

/**
 * db_productunclosedportlet部件
 *
 * @export
 * @class UnClosedProductPortlet
 * @extends {UnClosedProductPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class UnClosedProductPortlet extends UnClosedProductPortletBase {}
</script>
