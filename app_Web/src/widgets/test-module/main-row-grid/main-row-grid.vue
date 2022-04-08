<template src="./main-row-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainRowGridBase } from './main-row-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainRowGrid
 * @extends {MainRowGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainRowGrid extends MainRowGridBase {}
</script>
