<template src="./exp-product-main-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpProductMainGridBase } from './exp-product-main-grid-base';
 

/**
 * gridexpbar_grid部件
 *
 * @export
 * @class ExpProductMainGrid
 * @extends {ExpProductMainGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ExpProductMainGrid extends ExpProductMainGridBase { }
</script>
