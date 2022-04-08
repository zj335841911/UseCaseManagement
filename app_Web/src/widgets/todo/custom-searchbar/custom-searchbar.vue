<template src="./custom-searchbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CustomSearchbarBase } from './custom-searchbar-base';
 

/**
 * searchbar部件
 *
 * @export
 * @class CustomSearchbar
 * @extends {CustomSearchbarBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CustomSearchbar extends CustomSearchbarBase {}
</script>
