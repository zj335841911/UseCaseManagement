<template src="./bug-resolved-gird-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolvedGirdGridBase } from './bug-resolved-gird-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class BugResolvedGirdGrid
 * @extends {BugResolvedGirdGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolvedGirdGrid extends BugResolvedGirdGridBase {}
</script>
