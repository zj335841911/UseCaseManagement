<template src="./main-look-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainLookGridBase } from './main-look-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainLookGrid
 * @extends {MainLookGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainLookGrid extends MainLookGridBase {}
</script>
