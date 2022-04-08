<template src="./main-grid-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainGridGridBase } from './main-grid-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainGridGrid
 * @extends {MainGridGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainGridGrid extends MainGridGridBase {}
</script>
