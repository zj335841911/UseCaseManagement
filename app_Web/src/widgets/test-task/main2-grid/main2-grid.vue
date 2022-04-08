<template src="./main2-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main2GridBase } from './main2-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main2Grid
 * @extends {Main2GridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main2Grid extends Main2GridBase {}
</script>
