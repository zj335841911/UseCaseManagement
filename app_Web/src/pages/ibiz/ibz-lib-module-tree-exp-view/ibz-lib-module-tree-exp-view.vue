<template src="./ibz-lib-module-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibModuleTreeExpViewBase } from './ibz-lib-module-tree-exp-view-base';
import view_treeexpbar from '@widgets/ibz-lib-module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 模块维护视图
 *
 * @export
 * @class IbzLibModuleTreeExpView
 * @extends {IbzLibModuleTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibModuleTreeExpView extends IbzLibModuleTreeExpViewBase {}
</script>
