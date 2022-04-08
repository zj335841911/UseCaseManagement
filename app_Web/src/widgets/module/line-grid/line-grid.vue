<template src="./line-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { LineGridBase } from './line-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class LineGrid
 * @extends {LineGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class LineGrid extends LineGridBase {}
</script>
