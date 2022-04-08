<template src="./main-project-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainProjectGridBase } from './main-project-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainProjectGrid
 * @extends {MainProjectGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainProjectGrid extends MainProjectGridBase {}
</script>
