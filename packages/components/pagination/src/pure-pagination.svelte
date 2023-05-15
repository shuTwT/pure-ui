<script lang="ts">
  import type { Pagination as Props } from "@pure-ui/components/types";
  export let background: Props["background"] = false;
</script>

<div class="pure-pagination" class:is-background={background}>
  <button type="button" class="btn-prev" aria-label="go to previous page"
    >&lt;</button
  >
  <ul class="pure-pager">
    <li class="number" aria-label="page 1">1</li>
  </ul>
  <button type="button" class="btn-prev" aria-label="go to next page"
    >&gt;</button
  >
</div>

<style>
  .pure-pagination {
    display: flex;
    white-space: nowrap;
    align-items: center;
  }
  .pure-pager {
    user-select: none;
    list-style: none;
    font-size: 0;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  .pure-pager li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    min-width: 12px;
    height: 32px;
    line-height: 32px;
    color: #303133;
    background-color: #fff;
    padding: 0 4px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
  }
</style>
