<template src="./look-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { LookMainGridBase } from './look-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class LookMainGrid
 * @extends {LookMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class LookMainGrid extends LookMainGridBase {}
</script>
