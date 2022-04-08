<template src="./involved-project-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InvolvedProjectGridBase } from './involved-project-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class InvolvedProjectGrid
 * @extends {InvolvedProjectGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class InvolvedProjectGrid extends InvolvedProjectGridBase {}
</script>
