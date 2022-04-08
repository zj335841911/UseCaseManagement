<template src="./task-related-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskRelatedGridBase } from './task-related-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TaskRelatedGrid
 * @extends {TaskRelatedGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskRelatedGrid extends TaskRelatedGridBase {}
</script>
