<template src="./test-rounds-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestRoundsGridBase } from './test-rounds-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TestRoundsGrid
 * @extends {TestRoundsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestRoundsGrid extends TestRoundsGridBase {}
</script>
