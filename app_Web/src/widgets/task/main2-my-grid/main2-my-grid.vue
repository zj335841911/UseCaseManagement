<template src="./main2-my-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main2MyGridBase } from './main2-my-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main2MyGrid
 * @extends {Main2MyGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main2MyGrid extends Main2MyGridBase {}
</script>
