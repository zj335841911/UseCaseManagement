<template src="./product-weekly-gird-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductWeeklyGirdGridBase } from './product-weekly-gird-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductWeeklyGirdGrid
 * @extends {ProductWeeklyGirdGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductWeeklyGirdGrid extends ProductWeeklyGirdGridBase {}
</script>
