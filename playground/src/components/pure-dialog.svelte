<script lang="ts">
  function openDialog() {
    console.log(1);
  }
  let pureWindow;
  let state: {
    max: boolean;
    top?: number;
    left?: number;
    height?: number;
    width?: number;
  } = {
    max: false,
  };
  function openWindow() {
    const windowTmpl: HTMLTemplateElement = document.querySelector("#window");
    document.querySelector("#app").append(windowTmpl.content.cloneNode(true));
    const pureWindow: HTMLElement = document.querySelector(
      "#popup-window #pure-window"
    );
    const titleBar: HTMLElement = document.querySelector(
      "#pure-window .pure-title"
    );
    const mask: HTMLElement = document.querySelector(".pure-window-move");
    setTimeout(() => {
      pureWindow.classList.remove("pure-anim-00");
    }, 300);

    titleBar.onmousedown = function (event) {
      mask.style.display = "block";
      const pageX =
        event.pageX || event.clientX + document.documentElement.scrollLeft;
      const pageY =
        event.pageY || event.clientY + document.documentElement.scrollTop;
      const spaceX = pageX - pureWindow.offsetLeft;
      const spaceY = pageY - pureWindow.offsetTop;
      function onMouseMove(event) {
        const pageX =
          event.pageX || event.clientX + document.documentElement.scrollLeft;
        const pageY =
          event.pageY || event.clientY + document.documentElement.scrollTop;
        const clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        const clientWidth =
          document.documentElement.clientWidth || document.body.clientWidth;
        if (pageX - spaceX < 0) {
          pureWindow.style.left = 0 + "px";
        } else if (pageX - spaceX > clientWidth - pureWindow.offsetWidth) {
          pureWindow.style.left = clientWidth - pureWindow.offsetWidth + "px";
        } else {
          pureWindow.style.left = pageX - spaceX + "px";
        }
        if (pageY - spaceY < 0) {
          pureWindow.style.top = 0 + "px";
        } else if (pageY - spaceY > clientHeight - pureWindow.offsetHeight) {
          pureWindow.style.top = clientHeight - pureWindow.offsetHeight + "px";
        } else {
          pureWindow.style.top = pageY - spaceY + "px";
        }
      }
      document.addEventListener("mousemove", onMouseMove);
      document.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        document.onmouseup = null;
        mask.style.display = "none";
      };
    };
    document
      .querySelector("#pure-window .pure-setwin .pure-max")
      .addEventListener("click", () => {
        const pureWindow: HTMLElement = document.querySelector("#pure-window");
        if (state.max == false) {
          state.max = true;
          state.top = pureWindow.offsetTop;
          state.left = pureWindow.offsetLeft;
          state.height = pureWindow.offsetHeight;
          state.width = pureWindow.offsetWidth;
          pureWindow.style.height =
            document.documentElement.clientHeight + "px";
          pureWindow.style.width = document.documentElement.clientWidth + "px";
          pureWindow.style.top = "0";
          pureWindow.style.left = "0";
        } else {
          state.max = false;
          pureWindow.style.height = state.height + "px";
          pureWindow.style.width = state.width + "px";
          pureWindow.style.top = state.top + "px";
          pureWindow.style.left = state.left + "px";
        }

        console.log(state);
      });
    document
      .querySelector("#pure-window .pure-setwin .pure-close")
      .addEventListener("click", () => {
        pureWindow.classList.add("pure-anim-close");
        setTimeout(() => {
          document.querySelector("#popup-window").remove();
        }, 200);
      });
  }
</script>

<template id="window">
  <div class="pure-cover">
    <div
      id="pure-window"
      class="pure-window pure-anim-00"
      style="z-index: 100;width: 893px;height: 600px;position: fixed;top: 50px;left: 60.5px;"
    >
      <div class="pure-title">标题</div>
      <div class="pure-content">
        <slot><iframe class="iframe" title="" src="" /></slot>
      </div>
      <div class="pure-setwin">
        <span class="pure-max">最大化</span>
        <span class="pure-close">关闭</span>
      </div>
    </div>
    <div class="pure-window-move" />
  </div>
</template>
<div on:click={openDialog} on:keydown={() => {}}>
  <slot name="open" />
</div>

<style>
  .pure-cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(113, 113, 113, 0.6);
  }

  .pure-window {
    pointer-events: auto;
    position: fixed;
    margin: 0;
    padding: 0;
    top: 150px;
    left: 0;
    background-color: #fff;
    -webkit-background-clip: content;
    -moz-background-clip: content;
    -ms-background-clip: content;
    background-clip: content;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .pure-window .pure-title {
    position: relative;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 80px 0 20px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    border-radius: 2px 2px 0 0;
    cursor: move;
    user-select: none;
  }

  .pure-window .pure-content {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .pure-window .pure-content .iframe {
    width: 100%;
    box-sizing: border-box;
    border: none;
    flex: 1;
  }

  .pure-window .pure-setwin {
    position: absolute;
    top: 17px;
    right: 15px;
  }

  .pure-window .pure-setwin .pure-max,
  .pure-window .pure-setwin .pure-close {
    position: relative;
    cursor: pointer;
    user-select: none;
  }

  .pure-window .pure-setwin .pure-max:hover,
  .pure-window .pure-setwin .pure-close:hover {
    color: skyblue;
  }

  .pure-window-move {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: move;
    opacity: 0;
    filter: alpha(0);
    background-color: #fff;
    z-index: 2147483647;
  }

  .pure-anim-in {
    animation: pure-bounceIn 0.3s;
  }

  .pure-anim-close {
    animation-name: pure-bounceOut;
    animation-fill-mode: both;
    animation-duration: 0.2s;
  }

  @keyframes pure-bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pure-bounceOut {
    100% {
      opacity: 0;
      transform: scale(0.7);
    }

    30% {
      transform: scale(1.05);
    }

    0% {
      transform: scale(1);
    }
  }
</style>
