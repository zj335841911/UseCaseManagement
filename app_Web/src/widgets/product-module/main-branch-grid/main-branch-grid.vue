<template src="./main-branch-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainBranchGridBase } from './main-branch-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainBranchGrid
 * @extends {MainBranchGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainBranchGrid extends MainBranchGridBase {}
</script>
