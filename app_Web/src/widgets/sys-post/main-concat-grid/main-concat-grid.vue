<template src="./main-concat-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainConcatGridBase } from './main-concat-grid-base';
 

/**
 * gridexpbar_grid部件
 *
 * @export
 * @class MainConcatGrid
 * @extends {MainConcatGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainConcatGrid extends MainConcatGridBase {}
</script>
