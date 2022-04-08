<template src="./product-bug-type-sum-form-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugTypeSumFormGridBase } from './product-bug-type-sum-form-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductBugTypeSumFormGrid
 * @extends {ProductBugTypeSumFormGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductBugTypeSumFormGrid extends ProductBugTypeSumFormGridBase {}
</script>
