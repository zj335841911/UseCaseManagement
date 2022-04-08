<template src="./main-edit-row-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainEditRowGridBase } from './main-edit-row-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainEditRowGrid
 * @extends {MainEditRowGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainEditRowGrid extends MainEditRowGridBase {}
</script>
