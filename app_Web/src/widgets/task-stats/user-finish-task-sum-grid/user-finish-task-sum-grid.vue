<template src="./user-finish-task-sum-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserFinishTaskSumGridBase } from './user-finish-task-sum-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class UserFinishTaskSumGrid
 * @extends {UserFinishTaskSumGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class UserFinishTaskSumGrid extends UserFinishTaskSumGridBase {}
</script>
