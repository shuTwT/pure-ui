/// <reference types="vitest/globals" />
import { Button } from '../src'
import '@testing-library/jest-dom'
import {
  render,
  cleanup,
  fireEvent,
  act,
  RenderResult,
} from '@testing-library/svelte'

function sleep(ms: number = 0) {
  return new Promise((r) => setTimeout(r, ms))
}


function stripComment(str: string) {
  return str.replace(/<\!--.*?-->/g, '')
}


beforeEach(() => {
  cleanup()
})


describe("button",()=>{
    test("click",async()=>{
     const $=render(Button)
     $.component.$on('click',()=>{
        console.log(1);
     })
    
    })
})



