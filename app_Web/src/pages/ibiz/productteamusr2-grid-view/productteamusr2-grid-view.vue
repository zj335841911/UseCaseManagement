<template src="./productteamusr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PRODUCTTEAMUsr2GridViewBase } from './productteamusr2-grid-view-base';
import view_grid from '@widgets/productteam/product-team-edit-grid/product-team-edit-grid.vue';
import view_searchform from '@widgets/productteam/product-team-search-form-searchform/product-team-search-form-searchform.vue';

/**
 * 产品团队表格视图视图
 *
 * @export
 * @class PRODUCTTEAMUsr2GridView
 * @extends {PRODUCTTEAMUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class PRODUCTTEAMUsr2GridView extends PRODUCTTEAMUsr2GridViewBase {}
</script>
