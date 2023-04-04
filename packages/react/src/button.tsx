import * as pureUi from "pure-ui"
import React,{useEffect,useRef}from "react"
export interface ButtonProps extends pureUi.ButtonProps{
    onChange?(value:string):void
    onClick?(value:string):void
}
export const Button:React.FC<ButtonProps> = ({onChange,...props})=>{
    const ed=useRef<pureUi.Button>()
    const el=useRef<HTMLDivElement>(null)
    const onChangeRef=useRef<ButtonProps['onChange']>()
    const onClickRef=useRef<ButtonProps['onClick']>()
    useEffect(()=>{
        if(!el.current) return
        const button=new pureUi.Button({
            target:el.current,
            props
        })
        button.$on('change',(e:CustomEvent<{value:string}>)=>{
            onChangeRef.current?.(e.detail.value)
        })
        button.$on('click',(e:CustomEvent<{value:string}>)=>{
            onClickRef.current?.(e.detail.value)
        })
    },[])
    return <div ref={el}></div>
}