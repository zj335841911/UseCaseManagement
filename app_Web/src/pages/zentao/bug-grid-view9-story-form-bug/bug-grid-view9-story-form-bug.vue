<template src="./bug-grid-view9-story-form-bug.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugGridView9_StoryFormBugBase } from './bug-grid-view9-story-form-bug-base';
import view_grid from '@widgets/bug/story-related-grid/story-related-grid.vue';

/**
 * 来源Bug视图
 *
 * @export
 * @class BugGridView9_StoryFormBug
 * @extends {BugGridView9_StoryFormBugBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugGridView9_StoryFormBug extends BugGridView9_StoryFormBugBase {}
</script>
