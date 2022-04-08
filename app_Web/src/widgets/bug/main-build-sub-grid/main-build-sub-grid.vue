<template src="./main-build-sub-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_BuildSubGridBase } from './main-build-sub-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_BuildSubGrid
 * @extends {Main_BuildSubGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_BuildSubGrid extends Main_BuildSubGridBase {}
</script>
