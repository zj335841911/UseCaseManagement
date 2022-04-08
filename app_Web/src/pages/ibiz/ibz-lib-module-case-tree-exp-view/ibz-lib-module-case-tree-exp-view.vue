<template src="./ibz-lib-module-case-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibModuleCaseTreeExpViewBase } from './ibz-lib-module-case-tree-exp-view-base';
import view_treeexpbar from '@widgets/ibz-lib-module/case-tree-exp-viewtreeexpbar-treeexpbar/case-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 用例视图
 *
 * @export
 * @class IbzLibModuleCaseTreeExpView
 * @extends {IbzLibModuleCaseTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibModuleCaseTreeExpView extends IbzLibModuleCaseTreeExpViewBase {}
</script>
