<template src="./main-build-sub2-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_BuildSub2GridBase } from './main-build-sub2-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_BuildSub2Grid
 * @extends {Main_BuildSub2GridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_BuildSub2Grid extends Main_BuildSub2GridBase {}
</script>
