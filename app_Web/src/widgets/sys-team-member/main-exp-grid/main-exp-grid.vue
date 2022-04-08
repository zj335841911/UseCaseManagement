<template src="./main-exp-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainExpGridBase } from './main-exp-grid-base';
 

/**
 * gridexpbar_grid部件
 *
 * @export
 * @class MainExpGrid
 * @extends {MainExpGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainExpGrid extends MainExpGridBase {}
</script>
