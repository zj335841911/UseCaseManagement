<template src="./main-my-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainMyGridBase } from './main-my-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainMyGrid
 * @extends {MainMyGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainMyGrid extends MainMyGridBase {}
</script>
