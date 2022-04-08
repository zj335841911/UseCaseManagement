<template src="./main-info-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainInfoGridBase } from './main-info-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainInfoGrid
 * @extends {MainInfoGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainInfoGrid extends MainInfoGridBase {}
</script>
