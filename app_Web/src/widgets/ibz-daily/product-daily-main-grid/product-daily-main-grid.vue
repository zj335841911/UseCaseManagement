<template src="./product-daily-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductDailyMainGridBase } from './product-daily-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductDailyMainGrid
 * @extends {ProductDailyMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductDailyMainGrid extends ProductDailyMainGridBase {}
</script>
