<template src="./test-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestGridBase } from './test-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TestGrid
 * @extends {TestGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestGrid extends TestGridBase {}
</script>
