<template src="./product-life-road-map-slist-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductLifeRoadMapSListView9Base } from './product-life-road-map-slist-view9-base';
import view_list2 from '@widgets/product-life/get-roadmap-s-list/get-roadmap-s-list.vue';
import view_list from '@widgets/product-life/get-roadmap-year-s-list/get-roadmap-year-s-list.vue';

/**
 * 路线图视图
 *
 * @export
 * @class ProductLifeRoadMapSListView9
 * @extends {ProductLifeRoadMapSListView9Base}
 */
@Component({
    components: {
        view_list2, 
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ProductLifeRoadMapSListView9 extends ProductLifeRoadMapSListView9Base {}
</script>
