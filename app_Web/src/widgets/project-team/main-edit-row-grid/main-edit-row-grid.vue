<template src="./main-edit-row-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_EditRowGridBase } from './main-edit-row-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class Main_EditRowGrid
 * @extends {Main_EditRowGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class Main_EditRowGrid extends Main_EditRowGridBase {}
</script>
