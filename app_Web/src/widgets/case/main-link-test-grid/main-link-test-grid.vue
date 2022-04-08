<template src="./main-link-test-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainLinkTestGridBase } from './main-link-test-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class MainLinkTestGrid
 * @extends {MainLinkTestGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainLinkTestGrid extends MainLinkTestGridBase {}
</script>
