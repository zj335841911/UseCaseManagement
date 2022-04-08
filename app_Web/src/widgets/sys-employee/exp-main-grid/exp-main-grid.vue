<template src="./exp-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpMainGridBase } from './exp-main-grid-base';
 

/**
 * gridexpbar_grid部件
 *
 * @export
 * @class ExpMainGrid
 * @extends {ExpMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ExpMainGrid extends ExpMainGridBase {}
</script>
