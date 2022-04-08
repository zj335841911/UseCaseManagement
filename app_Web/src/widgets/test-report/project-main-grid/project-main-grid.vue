<template src="./project-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainGridBase } from './project-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectMainGrid
 * @extends {ProjectMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectMainGrid extends ProjectMainGridBase {}
</script>
