<template src="./main-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainGridBase } from './main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainGrid
 * @extends {MainGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainGrid extends MainGridBase { }
</script>
