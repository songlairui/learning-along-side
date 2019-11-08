<template>
  <div class="__home__">
    <div class="__nav__">songlairui</div>
    <div class="content">
      <EntryItemPlain class="left" :meta="meta" ref="v" :root="true"></EntryItemPlain>
      <div class="center"></div>
      <div class="right">
        <Content />
      </div>
    </div>
  </div>
</template>
<script>
import meta from '../../../data/cover.json'
import { wait } from '../lib/utils'
import EntryItemPlain from '../lib/EntryItemPlain'

export default {
  data() {
    return {
      meta // root meta
    }
  },
  components: { EntryItemPlain }
}
</script>
<style lang="less" scoped>
.__home__ {
  height: 100%;
  display: flex;
  flex-direction: column;
  .__nav__ {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
  .content {
    flex: 1;
    overflow: hidden;
    display: flex;
    .left {
      flex: 0 1 34%;
      overflow: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
    }
    .center {
      flex: 3;
    }
    .right {
      flex: 1 6;
    }
  }
}
</style>
<style lang="less">
html,
body,
#app {
  height: 100%;
}
.info-card {
  flex: 1 1 200px;
  outline: thin solid rgba(255, 255, 255, 0.3);
  outline-offset: -1px;
  border-radius: 4px;
  box-sizing: border-box;
  background: rgba(155, 150, 200, 0.1);
  min-height: 1em;
  &:hover {
    background: rgba(155, 150, 200, 0.15);
  }
}
</style>