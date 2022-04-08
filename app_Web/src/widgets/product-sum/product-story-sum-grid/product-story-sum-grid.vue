<template src="./product-story-sum-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStorySumGridBase } from './product-story-sum-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductStorySumGrid
 * @extends {ProductStorySumGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductStorySumGrid extends ProductStorySumGridBase {}
</script>
