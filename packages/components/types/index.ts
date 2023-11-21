import { SvelteComponent } from "svelte";
export interface LoadingProps2 extends PureUiProps {
  type?: "circle" | "arrow";
}

export interface PureUiLocale {}
export interface PureUiProps {}
export interface ButtonLocale extends PureUiLocale {
  defaultValue?: string;
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
  /**
   * 文本按钮
   */
  text?:boolean
}
export interface TableProps extends PureUiProps {
  data?: any[];
  thead?: string;
}
export interface MenuProps extends PureUiProps {
  mode?: "horizontal" | "vertical";
}
export interface MenuItemProps extends PureUiProps {
  index?: string | null;
  disabled?: boolean;
}
export interface SubmenuProps extends PureUiProps {
  index?: string | null;
  disabled?: boolean;
}
export interface Pagination extends PureUiProps {
  /**
   * 每页显示条目个数
   */
  pageSize?: number;
  /**
   * 总条目数
   */
  total?: number;
  /**
   * 总页数
   */
  pageCount?: number;
  /**
   * 当前页
   */
  currentPage?: number;
  /**
   * page-size改变时触发
   */
  sizeChange?: Function;
  /**
   * current-change改变时触发
   */
  currentChange?: Function;
  /**
   * 用户点击上一页按钮时触发
   */
  prevClick?: Function;
  /**
   * 用户点击下一页按钮时触发
   */
  nextClick?: Function;
}
