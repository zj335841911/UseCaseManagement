<template src="./doc-lib-l-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibLGridBase } from './doc-lib-l-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class DocLibLGrid
 * @extends {DocLibLGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocLibLGrid extends DocLibLGridBase {}
</script>
