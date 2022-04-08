<template src="./bug-resolved-by-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolvedByGridBase } from './bug-resolved-by-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class BugResolvedByGrid
 * @extends {BugResolvedByGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolvedByGrid extends BugResolvedByGridBase {}
</script>
