<template src="./task-finish-gird-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskFinishGirdGridBase } from './task-finish-gird-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TaskFinishGirdGrid
 * @extends {TaskFinishGirdGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskFinishGirdGrid extends TaskFinishGirdGridBase {}
</script>
