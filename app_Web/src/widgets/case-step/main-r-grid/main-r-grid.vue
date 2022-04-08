<template src="./main-r-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainRGridBase } from './main-r-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainRGrid
 * @extends {MainRGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainRGrid extends MainRGridBase {}
</script>
