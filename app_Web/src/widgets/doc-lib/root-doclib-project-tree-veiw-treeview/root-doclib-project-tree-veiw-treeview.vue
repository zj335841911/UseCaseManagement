<template src="./root-doclib-project-tree-veiw-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { RootDoclibProjectTreeVeiwTreeBase } from './root-doclib-project-tree-veiw-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class RootDoclibProjectTreeVeiwTree
 * @extends {RootDoclibProjectTreeVeiwTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class RootDoclibProjectTreeVeiwTree extends RootDoclibProjectTreeVeiwTreeBase {}
</script>
<style lang="less">
@import './root-doclib-project-tree-veiw-treeview.less';
</style>