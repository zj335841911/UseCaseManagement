<template src="./case-grid-view9-storyaffect.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseGridView9_StoryaffectBase } from './case-grid-view9-storyaffect-base';
import view_grid from '@widgets/case/storyaffect-case-grid/storyaffect-case-grid.vue';

/**
 * 相关用例视图
 *
 * @export
 * @class CaseGridView9_Storyaffect
 * @extends {CaseGridView9_StoryaffectBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseGridView9_Storyaffect extends CaseGridView9_StoryaffectBase {}
</script>
