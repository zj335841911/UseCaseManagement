<template src="./main-edit-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_EditGridBase } from './main-edit-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_EditGrid
 * @extends {Main_EditGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_EditGrid extends Main_EditGridBase {}
</script>
