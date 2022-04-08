<template src="./main-grid-suit-sub-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainGrid_SuitSubGridBase } from './main-grid-suit-sub-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainGrid_SuitSubGrid
 * @extends {MainGrid_SuitSubGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainGrid_SuitSubGrid extends MainGrid_SuitSubGridBase {}
</script>
