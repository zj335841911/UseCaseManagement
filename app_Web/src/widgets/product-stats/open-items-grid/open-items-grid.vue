<template src="./open-items-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { OpenItemsGridBase } from './open-items-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class OpenItemsGrid
 * @extends {OpenItemsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class OpenItemsGrid extends OpenItemsGridBase {}
</script>
