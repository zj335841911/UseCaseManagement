<template src="./case-grid-view9-me-cretae.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseGridView9_MeCretaeBase } from './case-grid-view9-me-cretae-base';
import view_grid from '@widgets/case/main2-grid/main2-grid.vue';

/**
 * 测试用例表格视图视图
 *
 * @export
 * @class CaseGridView9_MeCretae
 * @extends {CaseGridView9_MeCretaeBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseGridView9_MeCretae extends CaseGridView9_MeCretaeBase {}
</script>
