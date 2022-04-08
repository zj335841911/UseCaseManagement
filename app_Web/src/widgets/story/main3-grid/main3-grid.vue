<template src="./main3-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main3GridBase } from './main3-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main3Grid
 * @extends {Main3GridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main3Grid extends Main3GridBase {}
</script>
