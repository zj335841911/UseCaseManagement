<template src="./other-custom-searchbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { OtherCustomSearchbarBase } from './other-custom-searchbar-base';
 

/**
 * searchbar部件
 *
 * @export
 * @class OtherCustomSearchbar
 * @extends {OtherCustomSearchbarBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class OtherCustomSearchbar extends OtherCustomSearchbarBase {}
</script>
