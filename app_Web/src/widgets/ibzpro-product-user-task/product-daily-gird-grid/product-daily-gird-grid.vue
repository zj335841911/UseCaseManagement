<template src="./product-daily-gird-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductDailyGirdGridBase } from './product-daily-gird-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductDailyGirdGrid
 * @extends {ProductDailyGirdGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductDailyGirdGrid extends ProductDailyGirdGridBase {}
</script>
