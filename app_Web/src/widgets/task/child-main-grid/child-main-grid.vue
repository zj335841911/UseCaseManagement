<template src="./child-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ChildMainGridBase } from './child-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ChildMainGrid
 * @extends {ChildMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ChildMainGrid extends ChildMainGridBase {}
</script>
