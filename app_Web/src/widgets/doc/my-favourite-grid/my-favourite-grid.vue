<template src="./my-favourite-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyFavouriteGridBase } from './my-favourite-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MyFavouriteGrid
 * @extends {MyFavouriteGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyFavouriteGrid extends MyFavouriteGridBase {}
</script>
