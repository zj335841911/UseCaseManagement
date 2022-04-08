<template src="./product-grid-exp-viewgridexpbar-gridexpbar.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductGridExpViewgridexpbarGridexpbarBase } from './product-grid-exp-viewgridexpbar-gridexpbar-base';
import view_gridexpbar_grid from '@widgets/doc-lib/exp-product-main-grid/exp-product-main-grid.vue';
 

/**
 * gridexpbar部件
 *
 * @export
 * @class ProductGridExpViewgridexpbarGridexpbar
 * @extends {ProductGridExpViewgridexpbarGridexpbarBase}
 */
@Component({
    components: {
        view_gridexpbar_grid, 
         
    }
})
@VueLifeCycleProcessing()
export default class ProductGridExpViewgridexpbarGridexpbar extends ProductGridExpViewgridexpbarGridexpbarBase { }
</script>
