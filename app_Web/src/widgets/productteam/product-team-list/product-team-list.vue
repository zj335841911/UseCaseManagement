<template src="./product-team-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTeamListBase } from './product-team-list-base';
import layout_list_itempanel from '@widgets/productteam/product-team-pc-panel/product-team-pc-panel.vue';
 

/**
 * list部件
 *
 * @export
 * @class ProductTeamList
 * @extends {ProductTeamListBase}
 */
@Component({
    components: {
        layout_list_itempanel,
         
    },
})
@VueLifeCycleProcessing()
export default class ProductTeamList extends ProductTeamListBase {}
</script>
