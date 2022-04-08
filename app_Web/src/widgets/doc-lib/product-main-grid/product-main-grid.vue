<template src="./product-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductMainGridBase } from './product-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductMainGrid
 * @extends {ProductMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductMainGrid extends ProductMainGridBase {}
</script>
