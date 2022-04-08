<template src="./more-my-favourite-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MoreMyFavouriteGridBase } from './more-my-favourite-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MoreMyFavouriteGrid
 * @extends {MoreMyFavouriteGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MoreMyFavouriteGrid extends MoreMyFavouriteGridBase {}
</script>
