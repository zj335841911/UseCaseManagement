<template src="./product-team-edit-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTeamEditGridBase } from './product-team-edit-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProductTeamEditGrid
 * @extends {ProductTeamEditGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductTeamEditGrid extends ProductTeamEditGridBase {}
</script>
