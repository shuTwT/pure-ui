import { SvelteComponent } from "svelte"

export interface PureUiLocale{

}
export interface PureUiProps{

}
export interface ButtonLocale extends PureUiLocale{
    defaultValue:string
}
export interface ButtonProps extends PureUiProps {
    /**
     * 按钮类型语义化
     */
    type?:'default'|'primary'|'success'|'info'|'warming'|'danger'
    /**
     * i18n
     * @defaultValue en
     */
    locale?:Partial<PureUiLocale>
    /**
     * button value
     */
    value?:string
    /**
     * handle click
     */
    click?:()=>void
    /**
     * 加载状态
     */
    loading?:boolean
    /**
     * 图标组件
     */
    icon?:string|SvelteComponent
    /**
     * 禁用状态
     */
    disabled?:boolean 
}