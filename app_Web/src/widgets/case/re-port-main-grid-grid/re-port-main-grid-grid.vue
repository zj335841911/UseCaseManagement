<template src="./re-port-main-grid-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { RePortMainGridGridBase } from './re-port-main-grid-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class RePortMainGridGrid
 * @extends {RePortMainGridGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class RePortMainGridGrid extends RePortMainGridGridBase {}
</script>
