<template>
    <div class="app-markdown-parser" v-html="mdHTML"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import marked from 'marked';

@Component({})
export default class AppMarkdownParser extends Vue {
    /**
     * markdown文本
     *
     * @type {string}
     * @memberof AppMarkdownParser
     */
    @Prop()
    private value!: string;
    @Watch('value', { immediate: true })
    watchValue(): void {
        if (this.value && this.value !== '') {
            try {
                this.mdHTML = marked(this.value);
            } catch (err) {
                this.mdHTML = '';
            }
        }
    }
    /**
     * 展示的Html内容
     *
     * @type {string}
     * @memberof AppMarkdownParser
     */
    mdHTML = '';
}
</script>

<style lang="less" scoped>
@import url('./app-markdown-parser.less');
</style>
