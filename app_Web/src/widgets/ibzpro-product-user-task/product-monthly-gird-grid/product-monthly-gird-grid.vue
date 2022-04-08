<template src="./product-monthly-gird-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductMonthlyGirdGridBase } from './product-monthly-gird-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductMonthlyGirdGrid
 * @extends {ProductMonthlyGirdGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductMonthlyGirdGrid extends ProductMonthlyGirdGridBase {}
</script>
