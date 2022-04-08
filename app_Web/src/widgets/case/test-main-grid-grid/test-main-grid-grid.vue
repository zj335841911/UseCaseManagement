<template src="./test-main-grid-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestMainGridGridBase } from './test-main-grid-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TestMainGridGrid
 * @extends {TestMainGridGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestMainGridGrid extends TestMainGridGridBase {}
</script>
