<template src="./product-monthly-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductMonthlyMainGridBase } from './product-monthly-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductMonthlyMainGrid
 * @extends {ProductMonthlyMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductMonthlyMainGrid extends ProductMonthlyMainGridBase {}
</script>
