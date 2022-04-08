<template src="./favorite-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FavoriteMainGridBase } from './favorite-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class FavoriteMainGrid
 * @extends {FavoriteMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class FavoriteMainGrid extends FavoriteMainGridBase {}
</script>
