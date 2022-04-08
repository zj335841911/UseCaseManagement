<template src="./bug-grid-view9-storyaffect.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugGridView9_StoryaffectBase } from './bug-grid-view9-storyaffect-base';
import view_grid from '@widgets/bug/story-affect-bug-grid/story-affect-bug-grid.vue';

/**
 * 相关Bug视图
 *
 * @export
 * @class BugGridView9_Storyaffect
 * @extends {BugGridView9_StoryaffectBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugGridView9_Storyaffect extends BugGridView9_StoryaffectBase {}
</script>
