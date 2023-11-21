<svelte:options immutable={true} />

<script>
  import {
    PuPagination,
    PuSubmenu,
    PuMenuItem,
    PuMenu,
    PuDialog,
    PuTable,
    PuButton,
    PuLoading,
    PuSwitch,
    PuDropdown,
  } from "pure-ui/index";
  const tableData = [
    {
      name: "a1",
      sex: "b1",
      age: "18",
    },
    {
      name: "a2",
      sex: "b2",
      age: "19",
    },
    {
      name: "a3",
      sex: "b3",
      age: "20",
    },
    {
      name: "a4",
      sex: "b4",
      age: "21",
    },
    {
      name: "a5",
      sex: "b5",
      age: "22",
    },
  ];
</script>

<main>
  <div />
  <h1>playground</h1>
  <h2>Icon</h2>
  <div class="wrap" />
  <h2>Loading</h2>
  <div class="wrap">
    <PuLoading type="circle" />
    <PuLoading type="arrow" />
  </div>
  <h2>Button</h2>
  <h3>basic</h3>
  <div class="wrap">
    <PuButton type="default">default</PuButton>
    <PuButton type="primary">primary</PuButton>
  </div>
  <h3>dsabled</h3>
  <div class="wrap">
    <PuButton type="default" disabled={true}>default</PuButton>
    <PuButton type="primary" disabled={true}>primary</PuButton>
  </div>
  <h3>loading</h3>
  <div class="wrap">
    <PuButton type="default" loading={true}>default</PuButton>
    <PuButton type="primary" loading={true}>primary</PuButton>
  </div>
  <h2>switch</h2>
  <div class="wrap">
    <PuSwitch />
  </div>
  <h2>Table</h2>
  <div class="wrap">
    <PuTable thead="名字-性别-年龄-操作">
      {#each tableData as item}
        <tr>
          {#each Object.values(item) as subItem}
            <td>{subItem}</td>
          {/each}
          <td>
            <PuButton type="danger">删除</PuButton>
          </td>
        </tr>
      {/each}
    </PuTable>
  </div>
  <h2>dropdown</h2>
  <div class="wrap">
    <PuDropdown>
      <PuButton>dropdown</PuButton>
    </PuDropdown>
  </div>
  <h2>Dialog</h2>
  <div class="wrap">
    <PuDialog><PuButton type="primary" slot="open" /></PuDialog>
  </div>
  <h2>Menu</h2>
  <h3>top-menu</h3>
  <div class="wrap">
    <PuMenu mode="horizontal">
      <PuMenuItem index="1">Processing Center</PuMenuItem>
      <PuSubmenu index="2">
        <div slot="title">workspace</div>
        <PuMenuItem index="2-1">item one</PuMenuItem>
        <PuMenuItem index="2-2">item two</PuMenuItem>
        <PuMenuItem index="2-3">item three</PuMenuItem>
        <PuSubmenu index="2-4">
          <div slot="title">item four</div>
          <PuMenuItem index="2-4-1">item one</PuMenuItem>
          <PuMenuItem index="2-4-2">item two</PuMenuItem>
          <PuMenuItem index="2-4-3">item three</PuMenuItem>
        </PuSubmenu>
      </PuSubmenu>
      <PuMenuItem index="3" disabled>Info</PuMenuItem>
      <PuMenuItem index="4">Orders</PuMenuItem>
    </PuMenu>
  </div>
  <h3>side-menu</h3>
  <div class="wrap" style="height:400px">
    <div class="sidebar">
      <PuMenu>
        <PuMenuItem index="1">Processing Center</PuMenuItem>
        <PuSubmenu index="2">
          <div slot="title">workspace</div>
          <PuMenuItem index="2-1">item one</PuMenuItem>
          <PuMenuItem index="2-2">item two</PuMenuItem>
          <PuMenuItem index="2-3">item three</PuMenuItem>
          <PuSubmenu index="2-4">
            <div slot="title">item four</div>
            <PuMenuItem index="2-4-1">item one</PuMenuItem>
            <PuMenuItem index="2-4-2">item two</PuMenuItem>
            <PuMenuItem index="2-4-3">item three</PuMenuItem>
          </PuSubmenu>
        </PuSubmenu>
        <PuMenuItem index="3" disabled>Info</PuMenuItem>
        <PuMenuItem index="4">Orders</PuMenuItem>
      </PuMenu>
    </div>
  </div>
  <h2>Pagination</h2>
  <div class="wrap">
    <PuPagination />
  </div>
</main>

<style>
  .wrap {
    position: relative;
    display: flex;
    gap: 15px;
    align-items: center;
    outline: 1px dashed;
    padding: 10px;
  }
  .sidebar {
    position: absolute;
    width: 200px;
    top: 0;
    bottom: 0;
  }
</style>
