<template src="./my-favorite-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyFavoriteMainGridBase } from './my-favorite-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MyFavoriteMainGrid
 * @extends {MyFavoriteMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyFavoriteMainGrid extends MyFavoriteMainGridBase {}
</script>
