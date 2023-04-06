import { SvelteComponent } from "svelte";

export interface PureUiLocale {}
export interface PureUiProps {}
export interface ButtonLocale extends PureUiLocale {
  defaultValue: string;
}
export interface LoadingProps extends PureUiProps {
  type?: "circle"|"arrow";
}
export interface ButtonProps extends PureUiProps {
  /**
   * 按钮类型语义化
   */
  type?: "default" | "primary" | "success" | "info" | "warning" | "danger";
  /**
   * i18n
   * @defaultValue en
   */
  locale?: Partial<PureUiLocale>;
  /**
   * button value
   */
  value?: string;
  /**
   * handle click
   */
  click?: () => void;
  /**
   * 加载状态
   */
  loading?: boolean;
  /**
   * 图标组件
   */
  icon?: string | SvelteComponent;
  /**
   * 禁用状态
   */
  disabled?: boolean;
}
export interface TableProps extends PureUiProps{
    data:any[]
}
export interface MenuProps extends PureUiProps{
    mode:"horizontal" | "vertical"
}
export interface MenuItemProps extends PureUiProps{
    index:string|null
    disabled:boolean
}
export interface SubmenuProps extends PureUiProps{
    index:string|null
    disabled:boolean
}