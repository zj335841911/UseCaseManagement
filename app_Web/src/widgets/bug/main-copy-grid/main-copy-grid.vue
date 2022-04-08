<template src="./main-copy-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_CopyGridBase } from './main-copy-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_CopyGrid
 * @extends {Main_CopyGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_CopyGrid extends Main_CopyGridBase {}
</script>
