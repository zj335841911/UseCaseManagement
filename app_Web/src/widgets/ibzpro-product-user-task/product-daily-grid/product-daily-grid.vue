<template src="./product-daily-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductDailyGridBase } from './product-daily-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductDailyGrid
 * @extends {ProductDailyGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductDailyGrid extends ProductDailyGridBase {}
</script>
