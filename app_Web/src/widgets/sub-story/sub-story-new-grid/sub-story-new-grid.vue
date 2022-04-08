<template src="./sub-story-new-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SubStoryNewGridBase } from './sub-story-new-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class SubStoryNewGrid
 * @extends {SubStoryNewGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class SubStoryNewGrid extends SubStoryNewGridBase {}
</script>
