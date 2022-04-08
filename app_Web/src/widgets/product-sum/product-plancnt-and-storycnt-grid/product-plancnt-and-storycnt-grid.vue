<template src="./product-plancnt-and-storycnt-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlancntAndStorycntGridBase } from './product-plancnt-and-storycnt-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductPlancntAndStorycntGrid
 * @extends {ProductPlancntAndStorycntGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductPlancntAndStorycntGrid extends ProductPlancntAndStorycntGridBase { }
</script>
