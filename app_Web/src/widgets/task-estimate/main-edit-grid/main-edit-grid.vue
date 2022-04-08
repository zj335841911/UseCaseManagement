<template src="./main-edit-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainEditGridBase } from './main-edit-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainEditGrid
 * @extends {MainEditGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainEditGrid extends MainEditGridBase {}
</script>
