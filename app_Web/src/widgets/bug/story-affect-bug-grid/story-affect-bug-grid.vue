<template src="./story-affect-bug-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryAffectBugGridBase } from './story-affect-bug-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class StoryAffectBugGrid
 * @extends {StoryAffectBugGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StoryAffectBugGrid extends StoryAffectBugGridBase {}
</script>
