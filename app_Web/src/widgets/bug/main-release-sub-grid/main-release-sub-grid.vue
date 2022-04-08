<template src="./main-release-sub-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_ReleaseSubGridBase } from './main-release-sub-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_ReleaseSubGrid
 * @extends {Main_ReleaseSubGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_ReleaseSubGrid extends Main_ReleaseSubGridBase {}
</script>
