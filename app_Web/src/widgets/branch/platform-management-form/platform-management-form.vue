<template src="./platform-management-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PlatformManagementEditFormBase } from './platform-management-form-base';
 

/**
 * form部件
 *
 * @export
 * @class PlatformManagementEditForm
 * @extends {PlatformManagementEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PlatformManagementEditForm extends PlatformManagementEditFormBase {}
</script>
