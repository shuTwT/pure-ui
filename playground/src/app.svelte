<svelte:options immutable={true} />

<script>
  import Loading from "./components/pure-loading.svelte";
  import { PureButton } from "pure-ui";
  import Table from "./components/pure-table.svelte";
  import Dialog from "./components/pure-dialog.svelte";
  import PureMenu from "./components/pure-menu.svelte";
  import PureMenuItem from "./components/pure-menu-item.svelte";
  import PureSubmenu from "./components/pure-submenu.svelte";
  import PurePagination from "./components/pure-pagination.svelte";
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
    <Loading type="circle" />
    <Loading type="arrow" />
  </div>

  <h2>Button</h2>
  <h3>basic</h3>
  <div class="wrap">
    <PureButton type="default">default</PureButton>
    <PureButton type="primary">primary</PureButton>
    <PureButton type="success">success</PureButton>
    <PureButton type="info">info</PureButton>
    <PureButton type="warning">warning</PureButton>
    <PureButton type="danger">danger</PureButton>
  </div>
  <h3>dsabled</h3>
  <div class="wrap">
    <PureButton type="default" disabled={true}>default</PureButton>
    <PureButton type="primary" disabled={true}>primary</PureButton>
    <PureButton type="success" disabled={true}>success</PureButton>
    <PureButton type="info" disabled={true}>info</PureButton>
    <PureButton type="warning" disabled={true}>warning</PureButton>
    <PureButton type="danger" disabled={true}>danger</PureButton>
  </div>
  <h3>loading</h3>
  <div class="wrap">
    <PureButton type="default" loading={true}>default</PureButton>
    <PureButton type="primary" loading={true}>primary</PureButton>
    <PureButton type="success" loading={true}>success</PureButton>
    <PureButton type="info" loading={true}>info</PureButton>
    <PureButton type="warning" loading={true}>warning</PureButton>
    <PureButton type="danger" loading={true}>danger</PureButton>
  </div>
  <h2>Table</h2>
  <div class="wrap">
    <Table thead="名字-性别-年龄-操作">
      {#each tableData as item}
        <tr>
          {#each Object.values(item) as subItem}
            <td>{subItem}</td>
          {/each}
          <td>
            <PureButton type="danger">删除</PureButton>
          </td>
        </tr>
      {/each}
    </Table>
  </div>
  <h2>Dialog</h2>
  <div class="wrap">
    <Dialog><PureButton type="primary" slot="open" /></Dialog>
  </div>
  <h2>Menu</h2>
  <h3>top-menu</h3>
  <div class="wrap">
    <PureMenu mode="horizontal">
      <PureMenuItem index="1">Processing Center</PureMenuItem>
      <PureSubmenu index="2">
        <div slot="title">workspace</div>
        <PureMenuItem index="2-1">item one</PureMenuItem>
        <PureMenuItem index="2-2">item two</PureMenuItem>
        <PureMenuItem index="2-3">item three</PureMenuItem>
        <PureSubmenu index="2-4">
          <div slot="title">item four</div>
          <PureMenuItem index="2-4-1">item one</PureMenuItem>
          <PureMenuItem index="2-4-2">item two</PureMenuItem>
          <PureMenuItem index="2-4-3">item three</PureMenuItem>
        </PureSubmenu>
      </PureSubmenu>
      <PureMenuItem index="3" disabled>Info</PureMenuItem>
      <PureMenuItem index="4">Orders</PureMenuItem>
    </PureMenu>
  </div>
  <h3>side-menu</h3>
  <div class="wrap" style="height:400px">
    <div class="sidebar">
      <PureMenu>
        <PureMenuItem index="1">Processing Center</PureMenuItem>
        <PureSubmenu index="2">
          <div slot="title">workspace</div>
          <PureMenuItem index="2-1">item one</PureMenuItem>
          <PureMenuItem index="2-2">item two</PureMenuItem>
          <PureMenuItem index="2-3">item three</PureMenuItem>
          <PureSubmenu index="2-4">
            <div slot="title">item four</div>
            <PureMenuItem index="2-4-1">item one</PureMenuItem>
            <PureMenuItem index="2-4-2">item two</PureMenuItem>
            <PureMenuItem index="2-4-3">item three</PureMenuItem>
          </PureSubmenu>
        </PureSubmenu>
        <PureMenuItem index="3" disabled>Info</PureMenuItem>
        <PureMenuItem index="4">Orders</PureMenuItem>
      </PureMenu>
    </div>
  </div>
  <h2>Pagination</h2>
  <div class="wrap">
    <PurePagination />
  </div>
</main>

<style>
  .wrap {
    position: relative;
    display: flex;
    gap: 15px;
    align-items: center;
    outline: 1px dashed #000;
    padding: 10px;
  }
  .sidebar {
    position: absolute;
    width: 200px;
    top: 0;
    bottom: 0;
  }
</style>
