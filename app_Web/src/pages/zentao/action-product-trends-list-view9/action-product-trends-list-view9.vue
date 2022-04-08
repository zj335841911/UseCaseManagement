<template src="./action-product-trends-list-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionProductTrendsListView9Base } from './action-product-trends-list-view9-base';
import view_list from '@widgets/action/trends-list/trends-list.vue';

/**
 * 产品动态视图
 *
 * @export
 * @class ActionProductTrendsListView9
 * @extends {ActionProductTrendsListView9Base}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class ActionProductTrendsListView9 extends ActionProductTrendsListView9Base {}
</script>
