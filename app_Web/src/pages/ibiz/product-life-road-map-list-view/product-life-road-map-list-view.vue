<template src="./product-life-road-map-list-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductLifeRoadMapListViewBase } from './product-life-road-map-list-view-base';
import view_list2 from '@widgets/product-life/get-roadmap-list/get-roadmap-list.vue';
import view_list from '@widgets/product-life/get-roadmap-year-list/get-roadmap-year-list.vue';

/**
 * 路线图视图
 *
 * @export
 * @class ProductLifeRoadMapListView
 * @extends {ProductLifeRoadMapListViewBase}
 */
@Component({
    components: {
        view_list2, 
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ProductLifeRoadMapListView extends ProductLifeRoadMapListViewBase {}
</script>
