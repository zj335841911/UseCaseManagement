<template src="./more-my-favourites-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MoreMyFavouritesTreeTreeBase } from './more-my-favourites-tree-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class MoreMyFavouritesTreeTree
 * @extends {MoreMyFavouritesTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MoreMyFavouritesTreeTree extends MoreMyFavouritesTreeTreeBase {}
</script>
<style lang="less">
@import './more-my-favourites-tree-treeview.less';
</style>