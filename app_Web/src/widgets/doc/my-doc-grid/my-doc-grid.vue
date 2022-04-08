<template src="./my-doc-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyDocGridBase } from './my-doc-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MyDocGrid
 * @extends {MyDocGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyDocGrid extends MyDocGridBase {}
</script>
