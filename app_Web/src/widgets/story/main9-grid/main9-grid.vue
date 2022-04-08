<template src="./main9-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main9GridBase } from './main9-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main9Grid
 * @extends {Main9GridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main9Grid extends Main9GridBase {}
</script>
