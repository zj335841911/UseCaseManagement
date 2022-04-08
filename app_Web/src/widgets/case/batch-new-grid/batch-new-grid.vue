<template src="./batch-new-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BatchNewGridBase } from './batch-new-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class BatchNewGrid
 * @extends {BatchNewGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BatchNewGrid extends BatchNewGridBase {}
</script>
