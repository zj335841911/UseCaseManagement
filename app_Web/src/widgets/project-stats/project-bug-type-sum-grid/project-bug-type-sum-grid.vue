<template src="./project-bug-type-sum-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectBugTypeSumGridBase } from './project-bug-type-sum-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectBugTypeSumGrid
 * @extends {ProjectBugTypeSumGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectBugTypeSumGrid extends ProjectBugTypeSumGridBase {}
</script>
