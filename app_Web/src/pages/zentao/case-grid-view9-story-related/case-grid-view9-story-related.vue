<template src="./case-grid-view9-story-related.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseGridView9_StoryRelatedBase } from './case-grid-view9-story-related-base';
import view_grid from '@widgets/case/story-related-grid/story-related-grid.vue';

/**
 * 相关用例视图
 *
 * @export
 * @class CaseGridView9_StoryRelated
 * @extends {CaseGridView9_StoryRelatedBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseGridView9_StoryRelated extends CaseGridView9_StoryRelatedBase {}
</script>
