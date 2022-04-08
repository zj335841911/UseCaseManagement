<template src="./storyaffect-case-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryaffectCaseGridBase } from './storyaffect-case-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class StoryaffectCaseGrid
 * @extends {StoryaffectCaseGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StoryaffectCaseGrid extends StoryaffectCaseGridBase {}
</script>
