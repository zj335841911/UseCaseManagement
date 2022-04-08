<template src="./sub-task-new-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SubTaskNewGridBase } from './sub-task-new-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class SubTaskNewGrid
 * @extends {SubTaskNewGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class SubTaskNewGrid extends SubTaskNewGridBase {}
</script>
