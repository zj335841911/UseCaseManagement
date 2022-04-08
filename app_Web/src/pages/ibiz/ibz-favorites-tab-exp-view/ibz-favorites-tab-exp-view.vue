<template src="./ibz-favorites-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzFavoritesTabExpViewBase } from './ibz-favorites-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-favorites/tab-exp-viewtabexppanel-tabexppanel/tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 我的收藏视图
 *
 * @export
 * @class IbzFavoritesTabExpView
 * @extends {IbzFavoritesTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzFavoritesTabExpView extends IbzFavoritesTabExpViewBase {}
</script>
