<template src="./my-favourite-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyFavouritePortletBase } from './my-favourite-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class MyFavouritePortlet
 * @extends {MyFavouritePortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyFavouritePortlet extends MyFavouritePortletBase {}
</script>
