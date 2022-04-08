<template src="./more-recent-update-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MoreRecentUpdateTreeTreeBase } from './more-recent-update-tree-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class MoreRecentUpdateTreeTree
 * @extends {MoreRecentUpdateTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MoreRecentUpdateTreeTree extends MoreRecentUpdateTreeTreeBase {}
</script>
<style lang="less">
@import './more-recent-update-tree-treeview.less';
</style>