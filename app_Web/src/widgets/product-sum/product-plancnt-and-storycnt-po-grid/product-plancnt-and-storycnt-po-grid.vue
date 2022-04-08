<template src="./product-plancnt-and-storycnt-po-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlancntAndStorycnt_POGridBase } from './product-plancnt-and-storycnt-po-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductPlancntAndStorycnt_POGrid
 * @extends {ProductPlancntAndStorycnt_POGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductPlancntAndStorycnt_POGrid extends ProductPlancntAndStorycnt_POGridBase {}
</script>
